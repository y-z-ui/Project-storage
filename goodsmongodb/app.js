const express = require("express");
const ejs = require("ejs")
const bodyparser = require("body-parser");
const session = require("express-session");
const app = new express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        // secure: true
        maxAge: 60 * 60 * 1000
    },
    rolling: true
}))

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

app.use(express.static("public"));

app.use(bodyparser.urlencoded({
    extended: false,
}))
app.use(bodyparser.json());

app.use((req, res, next) => {
    if (req.url != "/admin/login" && req.url != "/admin/tologin" && !req.session.username) {
        res.redirect("/admin/login");
    } else {
        next();
    }
});

const admin = require("./route/admin");

app.use("/admin", admin);

app.listen(9527, () => {
    console.log("9527已启动>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
});