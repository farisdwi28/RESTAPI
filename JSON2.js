const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/convert/:celcius/:c/", (req,res) => {
    let c = req.params.c
    let reamur = 4 / 5 * req.params.c
    let kelvin = req.params.c +273
    let Fahrenheit =  9 / 5 * req.params.c + 32
    let run = {
         "celcius": req.params.c,
             "Reamur":reamur,
             "Fahrenheit":Fahrenheit,
             "Kelvin":kelvin
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})