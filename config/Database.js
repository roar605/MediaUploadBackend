import {ApiError} from "../utils/ApiError.js";
const mongoose =require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGO_DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connection successfull"))
    .catch((error)=>{
        throw new ApiError(500,"DB connection issue",error)
    })
}