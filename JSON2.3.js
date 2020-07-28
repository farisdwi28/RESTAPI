const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/convert/:Fahrenheit/:F/", (req,res) => {
    let F = req.params.F
    let celcius = 5 / 9 * (req.params.F - 32)
    let reamur = 4 / 9 * (req.params.F - 32) 
    let kelvin = 5 / 9  * (req.params.F - 32) + 273
    let run = {
         "Fahrenheit": req.params.F,
             "celcius":celcius,
             "reamur":reamur,
             "kelvin":kelvin
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})