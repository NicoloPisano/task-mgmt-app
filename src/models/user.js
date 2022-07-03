const mongoose = require('../config/mongoose');
const validator = require('validator');

const user = mongoose.model('User', {
    id: {
        type: String
    },  
    name: {
        type: String
    },
    surname:{
        type: String
    },
    email:{
        type: String,
        required:true,
        validation(email){
            if(!validator.isEmail(email)){
                throw new Error('Email is not valid')

            }
        }
    },
    password:{
        type: String
    }
})

module.exports = user;