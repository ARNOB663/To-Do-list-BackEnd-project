const express = require('express');
const ProfileController = require('../controllers/ProfileController.js');
const router =  express.Router() 
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware.js');
const ToDoListController = require('../controllers/ToDoListController.js')



router.post('/CreateProfile',ProfileController.CreateProfile)
router.post('/UserLogin',ProfileController.UserLogin)

router.get('/SelectProfile',AuthVerifyMiddleware,ProfileController.SelectProfile)
router.post('/UpdateProfile',AuthVerifyMiddleware,ProfileController.UpdateProfile)

router.post('/CreateToDoList',AuthVerifyMiddleware,ToDoListController.CreateToDoList)
router.get('/SelectToDoList',AuthVerifyMiddleware,ToDoListController.SelectToDoList)
router.post('/UpdateToDoList',AuthVerifyMiddleware,ToDoListController.UpdateToDoList)
router.post('/UpdateStatusToDoList',AuthVerifyMiddleware,ToDoListController.UpdateStatusToDoList)
router.post('/RemoveToDoList',AuthVerifyMiddleware,ToDoListController.RemoveToDoList)

router.get('/SelectToDoByStatus',AuthVerifyMiddleware,ToDoListController.SelectToDoByStatus)
router.get('/SelectToDoByDate',AuthVerifyMiddleware,ToDoListController.SelectToDoByDate)


module.exports = router;