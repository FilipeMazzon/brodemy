const GenericDAO = require('../../util/GenericDAO');

const CourseDAO = function(){

};
CourseDAO.prototype = new GenericDAO("courses");

module.exports = new CourseDAO;