// const { expect, jest, test } = require("@jest/globals")
const { v4 } = require("uuid");
const PeopleApp = require("../src/people/application/peopleApp");
const DynamoDBService = require("../src/people/infrastructure/dynamo.service");
const PeopleService = require("../src/people/infrastructure/people.service");

let envs = {
    REGION: '',
    DYNAMODB_TABLE_NAME: ''
}

beforeAll(() => {
    const {
        REGION,
        DYNAMODB_TABLE_NAME
    } = process.env;

    envs = {
        REGION,
        DYNAMODB_TABLE_NAME
    }

    process.env.REGION = 'us-west-1'
    process.env.DYNAMODB_TABLE_NAME = 'PeopleTblReto'
})

afterAll(() => {
    process.env.REGION = envs.REGION
    process.env.DYNAMODB_TABLE_NAME = envs.DYNAMODB_TABLE_NAME
})

describe('PeopleApp tests', () => {
    process.env.REGION = 'us-west-1';
    const dynamoDBService = new DynamoDBService();
    const peopleApp = new PeopleApp(dynamoDBService, PeopleService);

    test('should get People list data', async () => {
        const spyQueryDynamo = jest.spyOn(DynamoDBService.prototype, 'query');
        spyQueryDynamo.mockResolvedValue({
            Items: [{
                "id": v4(),
                "nombre": "Anakin",
                "genero": "male",
                "planetaOrigen": "Tierra"
            }, {
                "id": v4(),
                "nombre": "Yoda",
                "genero": "male",
                "planetaOrigen": "Tierra"
            }],
            Count: 2
        });
        const result = await peopleApp.getPeople();
        console.log({ result_200: result });

        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).length > 0).toBe(true);
    });

    test('should throw error when People list data not found', async () => {
        const spyScanDynamo = jest.spyOn(DynamoDBService.prototype, 'scan');

        spyScanDynamo.mockResolvedValue({
            Items: [],
            Count: 0
        })

        const result = await peopleApp.getPeople();
        console.log({result_getPeople_404: result});
        expect(result.statusCode).toBe(404);
        expect(JSON.parse(result.body).length).toBe(undefined);
    });

    test('should throw error by infra problem', async () => {
        const spyScanDynamo = jest.spyOn(DynamoDBService.prototype, 'scan');

        spyScanDynamo.mockRejectedValue({});

        const result = await peopleApp.getPeople();
        expect(result.statusCode).toBe(500);
        expect(JSON.parse(result.body).length).toBe(undefined);
    });

    test('should put person data', async () => {
        const mockPerson = {
            nombre: 'Yoda',
            genero: 'male',
            planetaOrigen: 'Marte'
        };
        const spyPutDynamo = jest.spyOn(DynamoDBService.prototype, 'put');

        spyPutDynamo.mockReturnThis();

        const result = await peopleApp.addPerson(mockPerson);
        expect(result.statusCode).toBe(201);
    });

    test('should throw error trying put person with wrong data', async () => {
        const mockPerson = {
            nombre: true,
            genero: 'male',
            planetaOrigen: 'Marte'
        };
        const spyPutDynamo = jest.spyOn(DynamoDBService.prototype, 'put');

        spyPutDynamo.mockReturnThis();

        const result = await peopleApp.addPerson(mockPerson);
        expect(result.statusCode).toBe(400);
    });

    test('should throw error trying put person by infra error', async () => {
        const mockPerson = {
            nombre: 'Yoda',
            genero: 'male',
            planetaOrigen: 'Marte'
        };
        const spyPutDynamo = jest.spyOn(DynamoDBService.prototype, 'put');

        spyPutDynamo.mockRejectedValue({});

        const result = await peopleApp.addPerson(mockPerson);
        expect(result.statusCode).toBe(500);
    });

    test('should get Person data by id', async () => {
        const mockId = 123;
        const spyQueryDynamo = jest.spyOn(DynamoDBService.prototype, 'query');

        spyQueryDynamo.mockResolvedValue({
            Items: [{
                "id": mockId,
                "nombre": "Anakin",
                "genero": "male",
                "planetaOrigen": "Tierra"
            }],
            Count: 1
        });

        const result = await peopleApp.getPerson(mockId);

        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).not.toBe(undefined);
    });

    test('should throw error when Person by id not found', async () => {
        const mockId = 123;
        const spyQueryDynamo = jest.spyOn(DynamoDBService.prototype, 'query');
        spyQueryDynamo.mockResolvedValue({
            Items: [],
            Count: 0
        })
        const result = await peopleApp.getPerson(mockId);

        expect(result.statusCode).toBe(404);
        expect(JSON.parse(result.body).length).toBe(undefined);
    });

    test('should throw error by infra problem', async () => {
        const spyQueryDynamo = jest.spyOn(DynamoDBService.prototype, 'query');
        spyQueryDynamo.mockRejectedValue({});

        const result = await peopleApp.getPeople();
        expect(result.statusCode).toBe(500);
        expect(JSON.parse(result.body).length).toBe(undefined);
    });
});
