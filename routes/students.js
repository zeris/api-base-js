//API base in Node Js and MySQL
//Developed by Brandon González
//All rights reserved


const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send("Hello students!!!");
    res.end();
})

module.exports = router;