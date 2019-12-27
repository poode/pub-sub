const express = require('express');
const logger = require('morgan');

require('./database/connection');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const eventRouter = require('./routes/events');
const signalRouter = require('./routes/signals');
const subscripeRouter = require('./routes/subscription');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/events', eventRouter);
app.use('/signals', signalRouter);
app.use('/subscripe', subscripeRouter);

module.exports = app;
