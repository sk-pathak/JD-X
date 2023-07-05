const express = require("express");
const hbs = require("hbs");
const app = express();

const routes = require("./routes/main");

app.use("", express.static("public"));
app.use("", routes);

//Template engine

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 5000, ()=> {
    console.log("Server started on port 5000");
});