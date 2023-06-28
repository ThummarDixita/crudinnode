const Joi = require('joi');

const schema = Joi.object({
    fname: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lname: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string().required(),
    address: Joi.string().required(),
})

module.exports = schema