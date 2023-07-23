const { errorResponse, successResponse } = require("../../../utils/response");
const { mapearCampoES, camposPersonaES, camposPlanetaES } = require("../../../utils/mappingAttrES");
const { NotFoundError } = require("../../../utils/errors");

class SwapiData {
    swapiService;

    constructor(swapiService) {
        this.swapiService = swapiService;
    }

    async getPeople() {
        try {
            let peopleData = await this.swapiService.getPeople();

            if (peopleData.length === 0) {
                throw new NotFoundError();
            }
            const people = peopleData.map((person) => {
                return {
                    ...mapearCampoES(camposPersonaES, person),
                };
            });

            return successResponse(people, 200);
        } catch (error) {
            console.error({error__swapi_Get: error});
            const bodyError = JSON.parse(error.message);
            return errorResponse(bodyError.message, bodyError.statusCode);
        }
    }

    async getPlanets() {
        try {
            let planetsData = await this.swapiService.getPlanets();

            if (planetsData.length === 0) {
                throw new NotFoundError();
            }
            const planetsList = planetsData.map((planet) => {
                return {
                    ...mapearCampoES(camposPlanetaES, planet),
                };
            });

            return successResponse(planetsList, 200);
        } catch (error) {
            const bodyError = JSON.parse(error.message);
            return errorResponse(bodyError.message, bodyError.statusCode);
        }
    }
}

module.exports = SwapiData;
