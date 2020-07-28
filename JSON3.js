const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/convert/:desimal/:d/", (req,res) => {
  let d = req.params.d
  let pembagi  = 1073741824
  let bit
  while (pembagi>d) pembagi/=2;
  do{
      bit=d/pembagi
      let hasil = bit
      d=d%pembagi
      pembagi/=2
  }
  while (pembagi>=1);
    let run = {
        "Decimal -> Biner =":pembagi
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})