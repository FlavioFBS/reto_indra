const { personSchemaValidator } = require("../utils/validator");

describe('Validator', () => {

    test('validation should to pass', () => {
        const mockPerson = {
            nombre: 'Anakin',
            genero: 'masculino',
            planetaOrigen: 'Tierra'
        }

        const result = personSchemaValidator.validate(mockPerson)
        console.log({result: result.error});

        expect(result.error).toBe(undefined);
    });

    test('validation should to failed by incorrect field', () => {
        const mockPerson = {
            nombre: 123,
            genero: 'masculino',
            planetaOrigen: 'Tierra'
        }

        const result = personSchemaValidator.validate(mockPerson)
        console.log({result: result.error});

        expect(result.error).not.toBe(undefined);
    });
});
