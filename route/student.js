const express = require('express');
const studentController = require('../controller/student');
const router = express.Router();

router.get('/', studentController.getStudents); 
router.get('/:id', studentController.getStudent);
router.post('/', studentController.addStudent);
router.patch('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;