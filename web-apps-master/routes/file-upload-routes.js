'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload,getallSingleFiles} = require('../controller/fileuploadController');
const router = express.Router();

// router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/singleFile', upload.single('file'), singleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);

module.exports = {
    routes: router
}