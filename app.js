const express = require("express");
const bodyParser = require("body-parser");

const mongo = require("./mongo");
const catapi = require("./catapi");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

// подключение папки с html-страницами
app.use(express.static(__dirname + "/html"));

// главная страница
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/html/menu.html");
});
// страница авторизации
app.get("/login", function (request, response) {
    response.sendFile(__dirname + "/html/login.html");
});
// авторизация
app.post("/login", urlencodedParser, function (request, response) {
    if (request.body.login && request.body.password) {
        response.redirect("/");
        console.log("\nNew login:");
        console.log("Login: " + request.body.login);
        console.log("Password: " + request.body.password);
    } else response.sendStatus(400);
});
// страница регистрации
app.get("/register", function (request, response) {
    response.sendFile(__dirname + "/html/register.html");
});
// регистрация
app.post("/register", urlencodedParser, function (request, response) {
        if (request.body.login && request.body.email && request.body.password && request.body.repassword) {
            response.redirect("/");
            console.log("\nNew registration:");
            console.log("Login: " + request.body.login);
            console.log("Email: " + request.body.email);
            console.log("Password: " + request.body.password);
            console.log("Re-password: " + request.body.repassword);
        } else response.sendStatus(400);
    }
);

app.listen(2019);
console.log("Server is running on localhost:2019");

// Test
//mongo.createPost("Author", "Title", "Text", "Pics");
//mongo.getAllPosts();
catapi.getRandomCats(5);