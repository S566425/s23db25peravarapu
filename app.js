var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account =require('./models/account');
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  });
  })
  )


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var organisationRouter = require('./routes/organisation');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var organisation = require('./models/organisation');
var resourceRouter = require('./routes/resource');

  
  
var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use();
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
// passport config
// Use the existing connection
// The Account model

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
// mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(connectionString);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


var db = mongoose.connection;

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/organisation',organisationRouter);
app.use('/board',boardRouter);
app.use('/choose',chooseRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
}
);

// view engine setup

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


async function recreateDB(){
  // Delete everything
  await organisation.deleteMany();
  let instance1 = new organisation({course:"Web apps",faculty:"Chandra Mouli",section:6});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
 
 let instance2 = new organisation({course:"Java",faculty:"Ajay Bandi",section:5});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance3 = new organisation({course:"ADB",faculty:"Qin ",section:4});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
}
 let reseed = true;
 if (reseed) {
    recreateDB();}

// List of all Costumes
// exports.organisation_list = async function(req, res) {
//   try{
//     console.log(`Triggered`);
//   theorganisation = await organisation.find();
//   res.send(theorganisation);
//   }
//   catch(err){
//   res.status(500);
//   res.send(`{"error": ${err}}`);
//   }
//   };



module.exports = app;