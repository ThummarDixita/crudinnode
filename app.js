const express = require('express')
const app = express()
const port = 4000
const router = require('./route')
var cors = require('cors');
require('./config/dbconnct')


app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})