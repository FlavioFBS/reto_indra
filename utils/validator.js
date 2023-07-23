const Joi = require('joi');


const personSchemaValidator = Joi.object({
    nombre: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    genero: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    planetaOrigen: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
});

module.exports = {
    personSchemaValidator
}
