const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to NodeJS')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`NodeJS Server started on port 5000!`));