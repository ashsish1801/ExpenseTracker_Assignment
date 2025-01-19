const mongoose = require('mongoose');
require('dotenv').config();

const connectDB= ()=>{
    try {
        mongoose.connect(process.env.MONGO_DB,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
        .then(()=>{console.log("DB connection Successfull")})
    } catch (error) {
        console.log("DB connection failed");
        console.log(error);

    }
}

module.exports = connectDB;