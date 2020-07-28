const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/Layang/:D1/:D2", (req,res) => {
    let D1 = req.params.D1
    let D2 = req.params.D2
    let luas = 1/2 * D1 * D2
    let run = {
         "Luas Layang-Layang = ":luas
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})