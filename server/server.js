const express = require('express')
const path = require('path')
const app = express();

//require routers
//app.get('/')


//this is where all the app.get and app.use shit will be
app.use(express.json())

// route handler to respond with main apps
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// app.use('/', )

app.listen(3000);
module.exports = app;