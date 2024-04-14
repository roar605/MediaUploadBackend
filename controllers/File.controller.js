const File = require("../models/File.model.js");

// localfile->handler function
//my name is rohit
exports.localFileUpload = async (req, res) => {
    try {
        //fetch file
        const file = req.files.file;
        console.log("File is here : ", file);

        let path = __dirname + "/files/" + Date.now();
        console.log("Path of file : ", path);


        file.mv(path, (err) => { console.log(err) });
        res.json({
            success: true,
            message: "Local file uploaded successfully"
        })
    } catch (error) {
        console.log(error);
    }
}