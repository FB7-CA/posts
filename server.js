const express = require("express")
const app = express()

const posts = [
    {
        titulo: "Hola ggg",
        img: "img.jpg"
    }
]

app.use(express.static("front"))
app.use(express.json())

app.get("/posts", function(req, res) {
    res.json(posts)
})

app.post("/post", function(req, res) {
    console.log(req.body)
    posts.push(req.body)
    res.json({ msg: "Todo chido" })
})

app.listen(8080, function() {
    console.log("Servidor escuchando")
})
