const express = require('express');
const ProfileController = require('../controllers/ProfileController.js');
const router =  express.Router() 
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware.js');



router.post('/CreateProfile',ProfileController.CreateProfile)
router.post('/UserLogin',ProfileController.UserLogin)

router.get('/SelectProfile',AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post('/UpdateProfile',AuthVerifyMiddleware,ProfileController.UpdateProfile)

module.exports = router;