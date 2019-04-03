const express = require("express")
const path = require('path')

const bodyParser = require("body-parser")

const mongo = require("./mongo")
const catapi = require("./catapi")

const app = express()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static(path.join(__dirname, 'client/build')))

// авторизация
app.post("/api/login", urlencodedParser, function (request, response) {
    if (request.body.login && request.body.password) {
        response.redirect("/")
        console.log("\nNew login:")
        console.log("Login: " + request.body.login)
        console.log("Password: " + request.body.password)
    } else response.sendStatus(400)
})

// регистрация
app.post("/api/register", urlencodedParser, function (request, response) {
    if (request.body.login && request.body.email && request.body.password && request.body.repassword) {
        response.redirect("/")
        console.log("\nNew registration:")
        console.log("Login: " + request.body.login)
        console.log("Email: " + request.body.email)
        console.log("Password: " + request.body.password)
        console.log("Re-password: " + request.body.repassword)
    } else response.sendStatus(400)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(2019)
console.log("Server is running on localhost:2019")

// Test
//mongo.createPost("Author", "Title", "Text", "Pics")
//mongo.getAllPosts()
catapi.getRandomCats(5)