const express = require('express');
const app = express();
const menuController = require("./controllers/menuController")
app.use(express.json());

const url1= "/api/menu"
const url2= "/api/checkOut"

app.get(url1, menuController.getMenu)
app.post(`${url2}/:dish`, menuController.postComment)

const PORT = 8888;
app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})