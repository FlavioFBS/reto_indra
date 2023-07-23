const { v4 } = require("uuid");
const { errorResponse, successResponse } = require("../../../utils/response");
const { personSchemaValidator } = require("../../../utils/validator");
const { NotFoundError } = require("../../../utils/errors");

class PeopleApp {
    peopleService;

    constructor(dynamoDBService, PeopleService) {
        this.peopleService = new PeopleService(dynamoDBService);
    }

    validateData(person) {
        const validation = personSchemaValidator.validate(person);
        if (validation.error) {
            throw new Error(JSON.stringify({
                statusCode: 400,
                message: validation.error.message
            }))
        }
    }

    async addPerson(newPerson) {
        try {
            this.validateData(newPerson);

            const personAdded = await this.peopleService.addPerson({
                id: v4(),
                ...newPerson
            });
            console.debug({ personAdded });
            return successResponse(personAdded, 201);
        } catch (error) {
            const bodyError = JSON.parse(error.message);
            return errorResponse(bodyError.message, bodyError.statusCode);
        }
    }

    async getPeople() {
        try {
            const peopleList = await this.peopleService.getPeople();
            console.info({peopleList});
            if (peopleList.length === 0) {
                throw new NotFoundError();
            }

            return successResponse(peopleList, 200);

        } catch (error) {
            const bodyError = JSON.parse(error.message);
            console.error({ bodyError });
            return errorResponse(bodyError.message, bodyError.statusCode);
        }
    }

    async getPerson(idPerson) {
        try {
            const personItem = await this.peopleService.getPerson(idPerson);
            if (personItem.length === 0) {
                throw new NotFoundError();
            }

            return successResponse(personItem, 200);

        } catch (error) {
            const bodyError = JSON.parse(error.message);
            console.error({ bodyError });
            return errorResponse(bodyError.message, bodyError.statusCode);
        }
    }
}

module.exports = PeopleApp;
