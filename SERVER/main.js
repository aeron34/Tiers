const express = require('express');
const path = require('path');
const cors = require('cors');
app = express();

app.use(express.static('images'));
app.use(cors());

let characters = {
  "falco": {
    "Tier": "A",
    "Game": "StarFox",
    "Weight": "180lbs",
    "Height": "5'2 ft",
    "Color":  [230,246,254]
  },

  "luigi": {
    "Tier": "C",
    "Game": "Mario Brothers",
    "Weight": "150lbs",
    "Height": "6'0 ft",
    "Color":[4,199,56,1]
  },

  "fox": {
    "Tier": "A",
    "Game": "StarFox",
    "Weight": "182.5lbs",
    "Height": "5'1 ft",
    Color: [215,141,15]
  },

  "ness": {
    "Tier": "C",
    "Game": "Mother",
    "Weight": "125lbs",
    "Height": "4'7 ft",
    Color: [227,54,104]
  },

  "falcon": {
    "Tier": "A",
    "Game": "Mother",
    "Weight": "190lbs",
    "Height": "6'2 ft",
    Color: [151,25,182,1]
  },

  "mario": {
    "Tier": "B",
    "Game": "Mario Brothers",
    "Weight": "152lbs",
    "Height": "5'8 ft",
    "Color": [236,39,20]
  }
}

let names = ["falco", "fox", "falcon",
"ness", "luigi"];

let colors = [
  [230,246,254],
  [215,141,15],
  [151,25,182,1],
  [236,39,20],
  [4,199,56,1] //luigi
]

app.get('/data/:name', (req, res) => {
  console.log(req.params.name);
  res.send(characters[req.params.name])
});

app.get('/data/', (req, res) => {
  console.log(req.params.name);
  res.send(characters);
});

app.get('/123', (req, res) => {
  res.sendFile(path.join(__dirname+'/images/falco.png'));
});

app.listen(5000);
