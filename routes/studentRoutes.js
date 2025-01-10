const express=require('express');
const { addStudent, getAllStudents } = require('../controllers/studentController');
const router=express.Router();

router.post('/addStudent',addStudent)
router.get('/getStudents',getAllStudents)
module.exports=router 