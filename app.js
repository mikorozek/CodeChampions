const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Добавим импорт express-session
// Импорт функции checkAuthentication
const { checkAuthentication } = require('./controllers/loginController');

//db connection
const pool = require('./db');
module.exports = { pool };

const app = express();
const port = 5000;
app.use(express.static('public'));
app.use(bodyParser.json());

const secret_key = 'PaP2023z';
app.use(session({
  secret: secret_key,
  resave: false,
  saveUninitialized: true,
}));

app.use('/api/exercises', checkAuthentication);
app.use('/api/statistics', checkAuthentication);

//setup routers
const exercises = require('./routers/exercises');
const statistics = require('./routers/statistics');
const pages = require('./routers/SSR_pages');
const register = require('./routers/register');
const login = require('./routers/login');

app.use('/api/exercises', exercises);
app.use('/api/login', login);
app.use('/api/statistics', statistics);
app.use('/', pages);
app.use('/api/register', register);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
