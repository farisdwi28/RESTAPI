const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/PersegiPanjang/:P/:L", (req,res) => {
    let P = req.params.P
    let L = req.params.L

    let luas = req.params.P * req.params.L
    let run = {
         "Luas PersegiPanjang = ":luas
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})