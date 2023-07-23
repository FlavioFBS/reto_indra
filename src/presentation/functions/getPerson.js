"use strict";
const PeopleApp = require("../../people/application/peopleApp");
const DynamoDBService = require("../../people/infrastructure/dynamo.service");
const PeopleService = require("../../people/infrastructure/people.service");

// instanciar clases de Repositories
const dynamoDBService = new DynamoDBService();
// instanciar clase de caso de uso:
const peopleApp = new PeopleApp(dynamoDBService, PeopleService);

const handler = async (event) => {
    return await peopleApp.getPerson(event.pathParameters.id);
};

module.exports.getPerson = handler;

