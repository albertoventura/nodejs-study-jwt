var express = require('express');
var userRouter = require('./routers/user.router');

var app = express();

app.use("/user", userRouter);

module.exports = app;



