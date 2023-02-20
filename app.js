const express = require('express');
const session = require('express-session');
const app = express();
const morgan = require('morgan');
const homeRoutes = require('./routes/homeRoutes');
const accountRoutes = require('./routes/accountRoutes');
//view engine
app.set('view engine', 'ejs');

//fire app
app.listen(3000);

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(session({
          secret: 'test',
          cookie: { maxAge: 3000000 },
          saveUninitialized: false,
          
      }));
      
//routes
app.get('/', (req,res) =>{
          res.redirect('/home/index');
});

app.use(accountRoutes);
app.use(homeRoutes);

app.use((req,res) => {
          res.status(404).render('404', { title: '404' });
});
      