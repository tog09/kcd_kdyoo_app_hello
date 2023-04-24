const express = require('express');
const PORT = 8080;

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello')
});

app.listen(PORT, () => {
  console.log("server is running");
});