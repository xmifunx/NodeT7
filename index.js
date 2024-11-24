const express = require('express');
const logger = require('./middleware/logger');

const error404 = require('./middleware/err-404');
const userRouter = require('./routes/authorisation');
const booksRouter = require('./routes/index');

const app = express();
app.use(express.json());

app.use(logger);
app.use('/api/user', userRouter);
app.use('/api/books', booksRouter);
app.use(error404);

const PORT = process.env.myPORT || 3000;
app.listen(PORT);
