const courseDAO = require('../models/CourseDAO');
const objectId = require('mongodb').ObjectId;

const CourseController = function(){
};

const createNewCourse = async (req, res) => {
    try {
        let {title, description, level, image_src, subCategory, requisiteString} = req.body;
        let requisites = requisiteString.split('\r\n');
        let course = {
            title,
            description,
            level,
            classes: [],
            category: {
                category: null,
                subCategory
            },
            image_src,
            instructor_id: null
            //instructor_id: objectId(req.session.data._id) maybe get from header
        };
        let courseToCheck = {title, instructor_id} = course;

        //create Check if already exist

        let courseDAO = new CourseDAO();
        let result = await courseDAO.insertOne(course);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).send(e);
    }
};
const getCourse = async (req, res) => {
    try {
        let courseToFind = req.params;
        let course = await courseDAO.findOne(courseToFind);
        res.status(200).send(course);
    } catch (e) {
        res.status(400).send(e);
    }
};
const getCourses = async (req, res) => {
    try {
        let course = await courseDAO.findAll();
        res.status(200).send(course);
    } catch (e) {
        res.status(400).send(e);
    }
};
const exclude = (req, res) => {
    try {
        let {_id} = req.params;
        let courseDAO = new CourseDAO();
        //let userDAO = new UserDAO();
        courseDAO.deleteCourse
    } catch (e) {

    }
};

CourseController.prototype = {
    createNewCourse,
    getCourse,
    getCourses,
    exclude
};
module.exports = new CourseController;