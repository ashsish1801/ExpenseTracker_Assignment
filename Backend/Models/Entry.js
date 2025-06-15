const mongoose = require('mongoose');
const moment = require('moment')

const entrySchema = new mongoose.Schema({
    amount:{
        type : Number,
        required : true,
    },
    description:{
        type : String,
        required : true,
    },
    category : {
        type: String,
        required : true,
    },
    Date :{
        type: String,
        // default : ()=> moment().format('DD/MMM/YY'),
    },
})

module.exports = mongoose.model('Entry', entrySchema)