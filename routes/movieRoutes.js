const express = require('express');
const multer = require('multer');
const path = require('path');
const movieController = require('../controller/movieController');
const router = express.Router();
const fs = require('fs');
const upload = require('../config/multerConfig');

router.get('/movies', movieController.getMovies);
router.get('/movies/add', movieController.getAddMovie);
router.post('/movies', upload.single('poster'), movieController.postAddMovie);
router.get('/movies/edit/:id', movieController.getEditMovie);
router.post('/movies/update/:id', upload.single('poster'), movieController.postUpdateMovie);
router.get('/movies/delete/:id', movieController.getDeleteMovie);

module.exports = router;
