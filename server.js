const express = require('express');
const app = express();
const data = require("./data.json")

//?verbos http
//get
//post
//put
//delete
app.use(express.json());


app.get("/clientes", function (req, res) {
      res.json(data);
});

app.get("/clientes/:id", function (req, res) {});
app.put("/clientes/:id", function (req, res) {});
app.post("/clientes", function (req, res) {});
app.delete("/clientes/:id", function (req, res) {});

app.listen(4000, function(){
      console.log('server is runing');
})

//!24min  https://www.youtube.com/watch?v=ghTrp1x_1As