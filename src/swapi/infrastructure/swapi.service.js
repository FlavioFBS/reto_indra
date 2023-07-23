const { default: axios } = require("axios");

class SwapiService {
    swapiBaseUrl = process.env.SWAPI_BASE_URL;

    async getPeople() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/people/`);
            return response.data.results;
        } catch (error) {
            throw new Error(JSON.stringify({
                statusCode: 500,
                message: "Hubo un problema al consultar el listado de personajes."
            }));
        }
    }

    async getPlanets() {
        try {
            const response = await axios.get(`${this.swapiBaseUrl}/planets/`);
            return response.data.results;
        } catch (error) {
            throw new Error(JSON.stringify({
                statusCode: 500,
                message: "Hubo un problema al consultar el listado de planetas."
            }));
        }
    }
}

module.exports = SwapiService
