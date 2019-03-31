const sha256 = require('sha256');
const userDAO = require('../models/UserDAO');
const coursesDAO = require('../models/CourseDAO');

const UserController = function () {
};

const checkAuthentication = async (req, res) => {
    try {
        let {email, password} = req.body;
        let aux = {
            email,
            password: sha256(password)
        };
        let result = await userDAO.findOne(aux);
        res.send(result);
    } catch (e) {
        res.send(e);
    }
};
const showMyCourses = async (req, res) => {
    try {
        let {user} = req.body;
        let results = await coursesDAO.find({user});
        res.send(results);
    } catch (e) {
        res.send(e);
    }
};
const createUser = async (req, res) => {
    try {
        let data = req.body;
        data = {
            name: data.name,
            email: data.email,
            password: sha256(data.password),
            courses: []
        };
        await userDAO.insertOne(data);
        res.send("created");
    } catch (e) {
        res.send(e);
    }
};

UserController.prototype = {
    checkAuthentication,
    showMyCourses,
    createUser
};

module.exports = new UserController();