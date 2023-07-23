
class NotFoundError extends Error {
    constructor() {
        super(JSON.stringify({
            message: "No hay datos registrados.",
            statusCode: 404,
        }))
    }
}

class BadRequestError extends Error {
    constructor() {
        super(JSON.stringify({
            message: "Hay un error en los datos enviados.",
            statusCode: 400,
        }))
    }
}

module.exports = {
    NotFoundError,
    BadRequestError
}

