const cloudinary = require("cloudinary");
const { ApiError } = require("../utils/ApiError");


exports.cloudinaryConnect = ()=>{
    try {
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
        })
    } catch (error) {
        throw new ApiError(400,"Cloudinary connection failed",error);
    }
}