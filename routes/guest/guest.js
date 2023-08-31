/**
 * Guest Route
 * 
 */
const express = require('express');
const guestController = require('../../app/controllers/guest/guestController');
const router = express.Router();

router.get('/',guestController.index);


module.exports = router;