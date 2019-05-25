const express = require('express');
const app = express();
const menuController = require("./controllers/menuController")
app.use(express.json());

app.get("/api/menu", menuController.getMenu)
app.get("/api/checkOut",menuController.getCheck )

const PORT = 8888;
app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})