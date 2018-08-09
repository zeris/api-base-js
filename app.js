//API base in Node Js and MySQL
//Developed by Brandon González
//All rights reserved


const express = require('express');
const app = express();

const studentRoutes = require('./routes/students');

app.use('/students', studentRoutes);

module.exports = app;
