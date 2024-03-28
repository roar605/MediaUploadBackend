//app create
const express = require("express");
const app = express();

// find PORT
const PORT = process.env.PORT || 3000;

//add middlewares
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

//DB connection
const db = require("./config/Database.js");
db.connect();

//cloudnary connection
const cloudinary = require("./config/Cloudinary.js");
cloudinary.cloudinaryConnect();

//mount API routes
const upload = require("./routes/FileUpload.js");
app.use("/api/v1", upload);

//activate server
app.listen(PORT, () => {
    console.log(`App is running at port: ${PORT}`);
})
