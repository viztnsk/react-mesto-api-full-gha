:diffg RE/* eslint-disable import/no-extraneous-dependencies */
:diffg RErequire('dotenv').config({ path: './config.js' });
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
:diffg REconst corsOptions = require('./middlewares/cors');
const { login, createUser } = require('./controllers/users');
const { loginValidation, registerValidation } = require('./middlewares/validation');
const { auth } = require('./middlewares/auth');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { errorHandler, wrongRouteHandler } = require('./middlewares/errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, DB_ADDRESS } = require('./config');

:diffg REconst whitelist = ['https://viztnsk.mesto.nomoredomains.work', 'http://127.0.0.1:3000'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect(DB_ADDRESS);

:diffg REapp.use(cors(corsOptions));
<<<<<<< HEAD

=======
:diffg REapp.use(helmet());
>>>>>>> eacc31bf7a013e249d5412061b3f3c4fe00c3ae1
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

:diffg RE// app.get('/crash-test', () => {
:diffg RE//   setTimeout(() => {
:diffg RE//     throw new Error('Сервер сейчас упадёт');
:diffg RE//   }, 0);
:diffg RE// });

app.post('/signin', loginValidation, login);
app.post('/signup', registerValidation, createUser);

app.use(auth);

app.use('/users', userRouter);
app.use('/cards', cardRouter);
app.use('*', wrongRouteHandler);

app.use(errorLogger);

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
