const CoursesDAO = require('../models/CourseDAO');

const getCourses = async (req, res) => {
    try {
        let coursesDAO = new CoursesDAO();
        let result = await coursesDAO.findAll({});
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};

const insertCourse = async (req, res) => {
    try {
        let coursesDAO = new CoursesDAO();
        let response = await coursesDAO.insertOne(req.body);
        res.send(response);
    } catch (e) {
        res.send(e);
    }
};

module.exports = {
    getCourses,
    insertCourse
};