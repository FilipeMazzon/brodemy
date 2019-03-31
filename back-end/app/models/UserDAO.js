const GenericDAO = require('../../util/GenericDAO');
class CoursesDAO extends GenericDAO{
    constructor(){
        super("users")
    }
}
module.exports = CoursesDAO;