const express = require("express");
const bodyParser = require("body-parser")
const hbs = require("hbs");
const app = express();

const routes = require("./routes/main");
const api = require("./routes/main");

const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use("", express.static("public"));
app.use("", routes);

app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', api);
app.get('/', function (req, res) {
    res.send('Server is up and running!');
})

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

app.listen(process.env.PORT | 5000, ()=> {
    console.log("Server started on port 5000");
});