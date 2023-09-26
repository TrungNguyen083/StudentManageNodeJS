const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Middleware để log chi tiết giao thức POST và GET, và URL
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Import routes
const indexRouter = require('./routes/indexRouter');
const MSSVRouter = require('./routes/MSSVRouter');
const messageRouter = require('./routes/messageRouter');

// Routes
app.use('/', indexRouter);
app.use('/:MSSV', MSSVRouter);
app.use('/message', messageRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
