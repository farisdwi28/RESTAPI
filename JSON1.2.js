const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/Persegi/:S", (req,res) => {
    let S = req.params.S
    let luas = req.params.S * 4
    let run = {
         "Luas Persegi = ":luas
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})