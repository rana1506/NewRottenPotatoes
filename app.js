require('dotenv').config()
const express = require('express')
const app = express()

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const methodOverride = require('method-override')
app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const checkAuth = require('./app_api/middleware/checkAuth');
app.use(checkAuth);

app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


//HOME
//app.get('/', (req, res) => {
//    const currentUser = req.user;
//    res.render('home',{currentUser});
//  });
  
const reviews = require('./app_api/controllers/reviews')(app);
const comments = require('./app_api/controllers/comments')(app);
const auth = require('./app_api/controllers/auth.js')(app);


app.listen(3000);