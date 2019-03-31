const GenericDAO = require('../../util/GenericDAO');
class CourseDAO extends GenericDAO{
    constructor(){
        super("courses")
    }
}
module.exports = CourseDAO;