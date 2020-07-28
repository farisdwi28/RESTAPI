const express = require("express")
const bodyParser = require("body-parser") 
const cors = require("cors") 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.get("/berat", (req,res) => {
    let tinggi = Number(req.body.tinggi)
    let Berat = Number(req.body.Berat)
    let bb = Berat/(tinggi**2)
    let hasil
    if (bb<18.5){
      hasil = "Kekurangan Berat Badan"
   }else if(bb>=18.5 && bb<=24.9){
    hasil = "Normal(IDEAL)"
   }else if(bb>=20.0 && bb<=29.9){
    hasil = "Kelebihan Berat Badan"
   }else if(bb>=30.0){
    hasil = "Kegemukan(Obesitas)"
   }
    let run = {
        tinggi:tinggi,
        Berat:Berat,
        "Berat Badan =":bb,
        "Kategori =":hasil        
    }
    res.json(run)
})
app.listen(8000, () => {
    console.log("Server run on port 8000");
})