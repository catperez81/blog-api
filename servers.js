
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();

const blogPostRouter = require('./BlogPostRouter');
app.use('/blog-posts', blogPostRouter);

// log the http layer
app.use(morgan('common'));

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
