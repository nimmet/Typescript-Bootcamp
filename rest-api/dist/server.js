"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log("Error loading environment variables, aboirting.");
    process.exit(1);
}
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./routes/utils");
var logger_1 = require("./logger");
var app = express();
function setupExpress() {
    app.route("/").get(root_1.root);
}
function startServer() {
    var port;
    var portEnv = process.env.PORT;
    var portArg = process.argv[2];
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port && (0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if ((0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if (!port) {
        port = 9000;
    }
    app.listen(9000, function () {
        logger_1.logger.info("Http REST API Server is running at http://localhost:9000");
    });
}
setupExpress();
startServer();
