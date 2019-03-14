const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/html"));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/html/menu.html");
});

app.get("/login", function (request, response) {
    response.sendFile(__dirname + "/html/login.html");
});

app.post("/login", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    response.redirect("/");
    console.log("\nNew login:");
    console.log("Login: " + request.body.login);
    console.log("Password: " + request.body.password);
});

app.get("/register", function (request, response) {
    response.sendFile(__dirname + "/html/register.html");
});

app.post("/register", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    response.redirect("/");
    console.log("\nNew registration:");
    console.log("Login: " + request.body.login);
    console.log("Email: " + request.body.email);
    console.log("Password: " + request.body.password);
    console.log("Re-password: " + request.body.repassword);
});

app.listen(8080);
console.log("Server is running on localhost:8080");