const validation = require("./validation")

module.exports = function (validator) {
    if (!validation.hasOwnProperty(validator)) {
        throw new Error(`${validator} is not valid`)
    }

    return async function (req, res, next) {
        try {
            const validate = await validation[validator].validateAsync(req.body)
            req.body = validate
            next()
        } catch (error) {
            console.log('error0', error);
            error.statusCode = 422
            next(error)
        }
    }
}