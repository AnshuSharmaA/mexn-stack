/**
 * Guest Route
 * 
 */
const express = require('express');
const guestController = require('../../app/controllers/guest/guestController');
const router = express.Router();

router.get('/',guestController.index);
router.get('/contact',guestController.contact);
router.get('/about',guestController.about);
router.get('/product',guestController.product);


module.exports = router;