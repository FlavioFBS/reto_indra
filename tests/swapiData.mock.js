
const swapiGetPeopleAxiosMock = {
    data: {
        "count": 1,
        "next": "https://swapi.py4e.com/api/people/?page=2",
        "previous": null,
        "results": [
            {
                "name": "Luke Skywalker",
                "height": "172",
                "mass": "77",
                "hair_color": "blond",
                "skin_color": "fair",
                "eye_color": "blue",
                "birth_year": "19BBY",
                "gender": "male",
                "homeworld": "https://swapi.py4e.com/api/planets/1/",
                "films": [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/2/",
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/6/",
                    "https://swapi.py4e.com/api/films/7/"
                ],
                "species": [
                    "https://swapi.py4e.com/api/species/1/"
                ],
                "vehicles": [
                    "https://swapi.py4e.com/api/vehicles/14/",
                    "https://swapi.py4e.com/api/vehicles/30/"
                ],
                "starships": [
                    "https://swapi.py4e.com/api/starships/12/",
                    "https://swapi.py4e.com/api/starships/22/"
                ],
                "created": "2014-12-09T13:50:51.644000Z",
                "edited": "2014-12-20T21:17:56.891000Z",
                "url": "https://swapi.py4e.com/api/people/1/"
            }
        ]
    }
}

const swapiGetPeopleNotFoundMock = {
    data: {
        "count": 0,
        "next": "https://swapi.py4e.com/api/people/?page=2",
        "previous": null,
        "results": []
    }
}

const parseSwapiDataGetPeople = [{
    "nombre": "Luke Skywalker",
    "altura": "172",
    "peso": "77",
    "colorCabello": "blond",
    "tes": "fair",
    "colorOjos": "blue",
    "anioNacimiento": "19BBY",
    "genero": "male",
    "planetaOrigen": "https://swapi.py4e.com/api/planets/1/",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
    ],
    "especies": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "naves": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
    ],
    "fechaRegistro": "2014-12-09T13:50:51.644000Z",
    "fechaEdicion": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.py4e.com/api/people/1/"
}]

// 
const swapiGetPlanetsAxiosMock = {
    data: {
        "count": 1,
        "next": "https://swapi.py4e.com/api/planets/?page=2",
        "previous": null,
        "results": [
            {
                "name": "Tatooine",
                "rotation_period": "23",
                "orbital_period": "304",
                "diameter": "10465",
                "climate": "arid",
                "gravity": "1 standard",
                "terrain": "desert",
                "surface_water": "1",
                "population": "200000",
                "residents": [
                    "https://swapi.py4e.com/api/people/1/",
                    "https://swapi.py4e.com/api/people/2/",
                    "https://swapi.py4e.com/api/people/4/",
                    "https://swapi.py4e.com/api/people/6/",
                    "https://swapi.py4e.com/api/people/7/",
                    "https://swapi.py4e.com/api/people/8/",
                    "https://swapi.py4e.com/api/people/9/",
                    "https://swapi.py4e.com/api/people/11/",
                    "https://swapi.py4e.com/api/people/43/",
                    "https://swapi.py4e.com/api/people/62/"
                ],
                "films": [
                    "https://swapi.py4e.com/api/films/1/",
                    "https://swapi.py4e.com/api/films/3/",
                    "https://swapi.py4e.com/api/films/4/",
                    "https://swapi.py4e.com/api/films/5/",
                    "https://swapi.py4e.com/api/films/6/"
                ],
                "created": "2014-12-09T13:50:49.641000Z",
                "edited": "2014-12-20T20:58:18.411000Z",
                "url": "https://swapi.py4e.com/api/planets/1/"
            },
        ]
    }
}

const swapiGetPlanetsNotFoundMock = {
    data: {
        "count": 0,
        "next": "https://swapi.py4e.com/api/planets/?page=2",
        "previous": null,
        "results": []
    }
}

const parseSwapiDataGetPlanets = [{
    "nombre": "Tatooine",
    "periodoRotacion": "23",
    "periodoOrbital": "304",
    "diametro": "10465",
    "clima": "arid",
    "gravedad": "1 standard",
    "terreno": "desert",
    "superficieAgua": "1",
    "poblacion": "200000",
    "residentes": [
        "https://swapi.py4e.com/api/people/1/",
        "https://swapi.py4e.com/api/people/2/",
        "https://swapi.py4e.com/api/people/4/",
        "https://swapi.py4e.com/api/people/6/",
        "https://swapi.py4e.com/api/people/7/",
        "https://swapi.py4e.com/api/people/8/",
        "https://swapi.py4e.com/api/people/9/",
        "https://swapi.py4e.com/api/people/11/",
        "https://swapi.py4e.com/api/people/43/",
        "https://swapi.py4e.com/api/people/62/"
    ],
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/4/",
        "https://swapi.py4e.com/api/films/5/",
        "https://swapi.py4e.com/api/films/6/"
    ],
    "fechaRegistro": "2014-12-09T13:50:49.641000Z",
    "fechaEdicion": "2014-12-20T20:58:18.411000Z",
    "url": "https://swapi.py4e.com/api/planets/1/"
}]

module.exports = {
    swapiGetPeopleAxiosMock,
    swapiGetPeopleNotFoundMock,
    parseSwapiDataGetPeople,
    swapiGetPlanetsAxiosMock,
    swapiGetPlanetsNotFoundMock,
    parseSwapiDataGetPlanets
}
