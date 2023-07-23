"use strict";

const SwapiData = require("../../swapi/application/SwapiData");
const SwapiService = require("../../swapi/infrastructure/swapi.service");

// instanciar clases de Repositories
const swapiService = new SwapiService();

// instanciar clase de caso de uso:
const swapiData = new SwapiData(swapiService);

const handler = async (event) => {
    return await swapiData.getPlanets();
};

module.exports.getPlanets = handler;
