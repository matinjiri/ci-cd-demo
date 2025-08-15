const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3010;

app.get('/', (req, res) => {
  res.send('Hello CI/CD 🚀');
});

app.get('/name', (req, res) => {
  res.send('CI CD Demo');
});

app.listen(port, () => {
  console.log('Server running on port ', port);
});
