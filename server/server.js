const express = require('express')
const app = express();
const path = require('path')

//this is where all the app.get and app.use shit will be
app.use(express.json())

app.listen(3000);