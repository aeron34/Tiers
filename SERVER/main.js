const express = require('express');
const path = require('path');

app = express();

app.use(express.static('images'));

app.get('/123', (req, res) => {
  res.sendFile(path.join(__dirname+'/images/falco.png'));
});

app.listen(5000);
