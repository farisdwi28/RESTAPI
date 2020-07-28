const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/convert/:kelvin/:k/", (req,res) => {
    let k = req.params.k
    let celcius = req.params.k - 273
    let reamur = 4 / 5 * (req.params.k - 273) 
    let Fahrenheit =  9 / 5 * (req.params.k - 273) + 32
    let run = {
         "kelvin": req.params.k,
             "celcius":celcius,
             "Fahrenheit":Fahrenheit,
             "reamur":reamur
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})