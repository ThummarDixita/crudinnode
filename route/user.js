const express = require('express')
const router = express.Router()
const usercontroller = require('../controller/usercontroller')
const validate = require("../utils/validationReq")



router.post("/add", validate("user"), usercontroller.adduser)
router.get("/", usercontroller.getuser)
router.put("/:id", usercontroller.updateUser)
router.delete("/:id", usercontroller.deleteUser)

module.exports = router

