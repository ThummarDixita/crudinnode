var jwt = require('jsonwebtoken');

module.exports = (auther) => (req, res, next) => {
    let authheader = req.get("Authorization")
    if (!authheader) {
        res.send({ status: false, message: "You are not Authorized" })
    }
    let token = authheader.split(" ")[1]
    let codetoken
    try {
        codetoken = jwt.verify(token, 'secret');
    } catch (error) {
        console.log("error", error);
    }
    if (auther.includes(codetoken.role)) {
        next()
    } else {
        res.send({ status: false, message: "You are not Authorized" })
    }
} 