var express = require('express');
    bodyParser = require('body-parser');

var userRouter = require('./routers/user.router');
var loginRouter = require('./routers/login.router');


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/login", loginRouter);
/* app.use(express.json()); */


module.exports = app;



