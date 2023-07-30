const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


router.post('/registerTuteur', authController.registerTuteur);
router.post('/registerUser', authController.registerUser);
router.post('/loginTuteur', authController.loginTuteur);
router.post('/loginUser', authController.loginUser);
router.post('/submits', authController.submits);
router.post('/register_eleve', authController.register_eleve);
 

 
 
module.exports = router;
