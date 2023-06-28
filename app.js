require("./config/dbconnct")
const express = require('express')
const app = express()
const port = 4000
const router = require('./route')
var cors = require('cors');

app.use(express.json())
app.use('/api', router)

app.use(cors({
    origin: '*'
}));

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})