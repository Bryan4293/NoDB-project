const express = require('express');
const app = express();
const menuController = require("./controllers/menuController")
app.use(express.json());

app.get("/api/menu", menuController.getMenu)
app.delete("/api/checkOut/:id", menuController.deleteCheck)

const PORT = 8888;
app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})