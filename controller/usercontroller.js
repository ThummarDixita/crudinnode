const employee = require("../models/user")
exports.adduser = async (req, res) => {
    try {
        const reqData = req.body;
        const userData = await employee.findOne({ $or: [{ fname: reqData.fname }, { email: reqData.email }] }, { fname: 1, email: 1 })
        if (!userData) {
            const data = await employee.create(reqData)
            return res.status(200).json({ status: true, data: reqData, message: "Data insrted succssefully" })
        } else {
            return res.status(400).json({ status: false, data: "", message: "User already exists" })

        }
    } catch (error) {
        console.log('error123', error);
    }
}
exports.getuser = async (req, res) => {
    try {
        const data = await employee.find()
        return res.status(200).json({ status: true, data: data, message: "Data fetch succssefully" })
    } catch (error) {
        console.log('error', error);
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const reqData = req.body
        console.log('id', id);
        const userData = await employee.findOne({ _id: { $nin: id }, $or: [{ fname: reqData.fname }, { email: reqData.email }] })
        // , { $or: [{ fname: reqData.fname }, { email: reqData.email }] }, { fname: 1, email: 1 }

        console.log("userdara", userData);
        if (!userData) {
            const data = await employee.findOneAndUpdate(
                { "_id": id },
                { "fname": reqData.fname, "lname": reqData.lname, "address": reqData.address, "email": reqData.email }
            )
            return res.status(200).json({ status: true, data: reqData, message: "Data updated succssefully" })
        } else {
            return res.status(400).json({ status: false, data: "", message: "User already exists" })
        }

    } catch (error) {
        console.log('error', error);
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const data = await employee.deleteOne({ "_id": id });
        return res.status(200).json({ status: true, data: data, message: "Data delete succssefully" })
    } catch (error) {
        console.log('error', error);
    }
}