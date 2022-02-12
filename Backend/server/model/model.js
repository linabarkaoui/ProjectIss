const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    coursecode:{
        type : String,
        unique: true,
    },
    coursename : String ,
    credits :  Number,
    cohorts : String,
    prerequisites : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;