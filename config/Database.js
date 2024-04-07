
const mongoose =require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGO_DB_URL,{        
    })
    .then(console.log("DB connection successfull"))
    .catch((error)=>{
        console.log("DB Connection : ",error);
    })
}