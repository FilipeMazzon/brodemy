const GenericDAO = require('../../util/GenericDAO');

const UserDAO = function(){

};
UserDAO.prototype = new GenericDAO("user");

module.exports = new UserDAO;