const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/Segitiga/:A/:T", (req,res) => {
    let A = req.params.A
    let T = req.params.T
    let luas = 1/2 * A * T
    let run = {
         "Luas Segitiga = ":luas
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})