const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    'mongodb+srv://ngomanhhung6666:manhhung@manhhung.cefkkoc.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log('Connect to MongoDB!'))
  .catch((err) => {
    console.log('Error: ' + err);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
