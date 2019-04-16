const express = require("express");
const path = require('path');
const mysql = require("mysql");
const session = require("express-session");
const bodyParser = require("body-parser");
const mongo = require("./mongo");
const catapi = require("./catapi");
const app = express();
const fs = require('fs');
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'client/build')));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Users'
});

connection.connect(err => {
    if (err) {
        console.log("MySQL connection error!");
        return console.log(err);
    }
    console.log("Connected to MySQL");
});

app.use(session({
    secret: '123123',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Авторизация
app.post("/login", function (request, response) {
    if (!request.body) return response.sendStatus(400);

    var username = request.body.login;
    var password = request.body.password;

    if (username && password) {
        var sql = 'SELECT * FROM accounts WHERE username = ? AND password = ?';
        var values = [username, password];

        connection.query(sql, values, (error, results, field) => {
            if (error) throw error;

            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                response.redirect("/");
            } else {
                response.send('Incorrect Username and/or Password!');
            }
            response.end();
        });
    } else {
        response.send('Please enter Username and Password!');
        response.end();
    }
    console.log("\nNew login:");
    console.log("Login: " + request.body.login);
    console.log("Password: " + request.body.password);
});

// Регистрация
app.post("/register", function (request, response) {
    if (!request.body) return response.sendStatus(400);
    var username = request.body.login;
    var email = request.body.email;
    var password = request.body.password;
    var repassword = request.body.repassword;

    var sql = 'SELECT username FROM accounts WHERE username = "' + username + '"';

    connection.query(sql, (error, result, fields) => {
        if (error) throw error;

        if (result.length !== 0) {
            console.log("Login exist");
        } else {
            sql = 'SELECT email FROM accounts WHERE email = "' + email + '"';
            connection.query(sql, (error, result, fields) => {
                if (error) throw error;
                if (result.length !== 0) {
                    console.log("Email exist");
                } else {
                    sql = 'INSERT INTO accounts (username, password, email) VALUES ?';
                    var values = [[username, password, email]];
                    connection.query(sql, [values], (error, result) => {
                        if (error) throw error;
                        request.session.loggedin = true;
                        request.session.username = username;
                        console.log("\nNew registration:");
                        console.log("Login: " + request.body.login);
                        console.log("Email: " + request.body.email);
                        console.log("Password: " + request.body.password);
                        console.log("Re-password: " + request.body.repassword);
                        console.log("Number of records inserted: " + result.affectedRows);
                    });
                }
            });
        }
    });
    response.redirect("/");
});

// Создание поста
app.post("/profile", function (request, response) {
    catapi.getRandomCats(1, function (pics) {
        mongo.createPost(111, request.body.title, request.body.text, pics[0].url);
    })
    response.redirect("/profile");
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(2019);
console.log("Server is running on localhost:2019");