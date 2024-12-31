"use strict";
const express = require("express");
const http = require("node:http");
const app = express();
const server = http.createServer(app);
const path = require("node:path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { v4: uuid } = require("uuid");
console.log(uuid());
require("dotenv").config();
// require("dotenv").configDotenv(); // This line is not needed
const cors = require("cors");
const origins = [
    "http://localhost:3500"
]

app.use(express.json());
app.use(cookieParser());
app.use(async function (request, response, next) {
    response.statusCode = Number(parseInt(200));
    response.contentType = "Application/json";

    response.setHeader("Access-Control-Allow-Credentials", Boolean(true))
    response.setHeader("Access-Control-Allow-Origin", origins[0]);
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, UPDATE");

    response.cookie("API", "keep.memories.com api", {
        expires: new Date(Date.now() + 2500),
        httpOnly: Boolean(true)
    });
    next();
});
app.use(express.urlencoded({ extended: Boolean(false) }));
app.use(express.static(path.join(__dirname, '../../public')));
app.set("port", Number(parseInt(3500)));
app.use(bodyParser.urlencoded({ extended: Boolean(false) }));
app.use(bodyParser.json());
app.use(cors({
    origin: "*",
    credentials: Boolean(true),
}));

app.use("/admin/uploaded/resources", require("../routers/admin.resource.router.controller"));
app.use("/resources", require("../routers/resources.router.controller"));
app.use("/", require("../routers/root.router.controller"));
app.all("*", require("../middleware/error/404.middleware.controller"));
// app.use(require("../middleware/error/404.middleware.controller")); // This line is duplicate

const events = require("node:events");
const ee = new events();
ee.on("running", () => console.log("express server started"));

server.listen(app.get("port") || process.env.PORT, () => {
    server.listening ? ee.emit("running") : console.log("server not running!");
}); 