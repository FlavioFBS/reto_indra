"use strict";
const { default: axios} = require("axios");
const SwapiData = require("../src/swapi/application/SwapiData");
const SwapiService = require("../src/swapi/infrastructure/swapi.service");
const { swapiGetPeopleAxiosMock, parseSwapiDataGetPeople, swapiGetPeopleNotFoundMock, swapiGetPlanetsAxiosMock, parseSwapiDataGetPlanets, swapiGetPlanetsNotFoundMock } = require("./swapiData.mock");

const swapiService = new SwapiService()
const swapiData = new SwapiData(swapiService);

let envs = {
    SWAPI_BASE_URL: ''
}

beforeAll(() => {
    const {
        SWAPI_BASE_URL,
    } = process.env;

    envs = {
        SWAPI_BASE_URL,
    }

    process.env.SWAPI_BASE_URL = 'swapi/api'
})

afterAll(() => {
    process.env.SWAPI_BASE_URL = envs.SWAPI_BASE_URL
})

describe('SwapiData tests', () => {
    test('should to get People list', async() => {
        const spyAxiosGet = jest.spyOn(axios, 'get');

        spyAxiosGet.mockResolvedValue(swapiGetPeopleAxiosMock);

        const result = await swapiData.getPeople();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).toEqual(parseSwapiDataGetPeople);
    });

    test('should to return 404 when swapi People list not found', async() => {
        const spyAxiosGet = jest.spyOn(axios, 'get');

        spyAxiosGet.mockResolvedValue(swapiGetPeopleNotFoundMock);

        const result = await swapiData.getPeople();
        expect(result.statusCode).toBe(404);
    });

    test('should to return 500 when swapi Api failed', async() => {
        const spyAxiosGet = jest.spyOn(axios, 'get');

        spyAxiosGet.mockRejectedValue();

        const result = await swapiData.getPeople();
        expect(result.statusCode).toBe(500);
    });

    test('should to get Planets list', async() => {
        const spyAxiosGet = jest.spyOn(axios, 'get');

        spyAxiosGet.mockResolvedValue(swapiGetPlanetsAxiosMock);

        const result = await swapiData.getPlanets();
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body)).toEqual(parseSwapiDataGetPlanets);
    });

    test('should to return 404 when swapi People list not found', async() => {
        const spyAxiosGet = jest.spyOn(axios, 'get');

        spyAxiosGet.mockResolvedValue(swapiGetPlanetsNotFoundMock);

        const result = await swapiData.getPlanets();
        expect(result.statusCode).toBe(404);
    });

    test('should to return 500 when swapi Api failed', async() => {
        const spyAxiosGet = jest.spyOn(axios, 'get');

        spyAxiosGet.mockRejectedValue();

        const result = await swapiData.getPlanets();
        expect(result.statusCode).toBe(500);
    });

});
