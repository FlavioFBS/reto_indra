class PeopleService {
    dynamoDBService;

    constructor(DynamoDBService) {
        this.dynamoDBService = DynamoDBService
    }
    async addPerson(newPerson) {
        try {
            const queryParam = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                Item: newPerson,
                ConditionExpression: 'attribute_not_exists(id)'
            }
            await this.dynamoDBService.put(queryParam);
            console.info('data saved');
            return {
                message: 'Person added.'
            }
        } catch (error) {
            console.error({ errorAddPerson: error });
            throw new Error(JSON.stringify({
                statusCode: 500,
                message: 'Hubo un error al registrar.'
            }))
        }
    }

    async getPeople() {
        try {
            const queryParam = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
            }
            const ddbResponse = await this.dynamoDBService.scan(queryParam);
            console.debug({ ddbResponse });
            return ddbResponse.Items;
        } catch (error) {
            console.error({ errorGetPeople: error });
            throw new Error(JSON.stringify({
                statusCode: 500,
                message: 'Hubo un error al listar las personas.'
            }))
        }
    }

    async getPerson(idPerson) {
        try {
            const queryParam = {
                TableName: process.env.DYNAMODB_TABLE_NAME,
                KeyConditionExpression: '#id = :id',
                Limit: 1,
                ScanIndexForward: false,
                ExpressionAttributeValues: {
                    ':id': idPerson
                },
                ExpressionAttributeNames: {
                    '#id': 'id'
                }
            }
            const ddbResponse = await this.dynamoDBService.query(queryParam);

            return ddbResponse.Items[0] || [];
        } catch (error) {
            console.error({ errorGetPerson: error });
            throw new Error(JSON.stringify({
                statusCode: 500,
                message: 'Hubo un error al listar las personas.'
            }))
        }
    }
}

module.exports = PeopleService;
