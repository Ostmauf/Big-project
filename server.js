const express = require("express");
const expressLayout = require("express-layout");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const server = express();

server.use(express.static("public"));
//View engine
server.set("view engine", "ejs");
server.use(expressLayout)
server.use(cookieParser)

server.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log("Connected to server");
});