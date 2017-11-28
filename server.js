

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const config= require("./config.json");

let routes={
    homePage:require("./API/homePage").route,
    admin:require("./API/adminPage").route
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.use("/",express.static("./Frontend"));

app.use("/",routes.homePage);
app.use("/admin",routes.admin);
app.use("/",express.static("./Frontend"));

app.listen(config.Port,()=> {
    console.log(`listening at http://localhost:${config.Port}`);
});

