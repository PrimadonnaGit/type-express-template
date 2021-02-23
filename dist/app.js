"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("express")();
app.get("/", function (req, res, next) {
    res.send("hello typescript express!");
});
exports.default = app;
//# sourceMappingURL=app.js.map