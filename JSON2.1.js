const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/convert/:reamur/:r/", (req,res) => {
    let P = req.params.r
    let c = 283;
    let celcius = 5 / 4 * req.params.r
    let kelvin = (c + 273) * 5 / 4 * req.params.r + 273 
    let Fahrenheit =  9 / 4 * req.params.r + 32
    let run = {
         "reamur": req.params.r,
             "celcius":celcius,
             "Fahrenheit":Fahrenheit,
             "Kelvin":kelvin
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})