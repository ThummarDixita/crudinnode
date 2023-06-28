const Employee = require("../models/user")
exports.adduser = async (req, res) => {
    try {
        const reqData = req.body;
        console.log("reqData", reqData);
        const data = await Employee.create(reqData)
        return res.status(200).json({ status: true, data: reqData, message: "Data insrted succssefully" })
    } catch (error) {
        console.log('error', error);
    }
}
exports.getuser = async (req, res) => {
    try {
        const data = await Employee.find()
        return res.status(200).json({ status: true, data: data, message: "Data fetch succssefully" })
    } catch (error) {
        console.log('error', error);
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const reqData = req.body
        const data = await Employee.findOneAndUpdate(
            { "_id": id },
            { "name": reqData.name, "email": reqData.email }
        )
        return res.status(200).json({ status: true, data: reqData, message: "Data updated succssefully" })
    } catch (error) {
        console.log('error', error);
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Employee.deleteOne({ "_id": id });
        return res.status(200).json({ status: true, data: data, message: "Data delete succssefully" })
    } catch (error) {
        console.log('error', error);
    }
}