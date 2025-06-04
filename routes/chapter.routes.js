const express = require('express');
const router = express.Router();
const { getAllChapters, getChapterById, uploadChapters } = require('../controllers/chapter.controller.js');
const isAdmin = require('../middlewares/auth.js');
const multer = require('multer');


const upload = multer({ storage: multer.memoryStorage() });

router.get('/', getAllChapters);
router.get('/:id', getChapterById);
router.post('/', isAdmin, upload.single('file'), uploadChapters);

module.exports = router;

