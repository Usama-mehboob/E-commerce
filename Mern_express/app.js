var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
const bodyParser = require('body-parser')
// routes
var routes = require("./routes/userRouter")
var Authrouter = require("./routes/Authroutes")
var userRouter = require("./routes/userRouter")
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
require('./bin/dbConnection');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Apply CORS middleware without the trailing comma
app.use(cors());
// app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
app.use(bodyParser.json());
// app.use(function(req, res, next) { // kolpa magkiorika poy de ta kserw
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
//   next();
// });

// app.use("/user", routes);
app.use("/authUser", Authrouter);
app.use("/user", userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;