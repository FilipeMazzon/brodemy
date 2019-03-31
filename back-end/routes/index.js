const express = require('express');
const router = express.Router();

/* GET home page. */
const CourseController = require('../app/controllers/Course');

router.get('/', (req, res) => {
    CourseController.getCourses(req, res);
});
router.get('/:_id', (req, res) => {
    CourseController.getCourse(req, res);
});
router.post('/', (req, res) => {
    CourseController.insertCourse(req, res);
});

module.exports = router;
