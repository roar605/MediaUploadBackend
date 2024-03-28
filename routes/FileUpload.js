const express = require("express");
const router = express.Router();

const { localFileUpload } = require("../controllers/File.controller.js");

//api route
router.post("/local-file-upload", localFileUpload);

module.exports = router;