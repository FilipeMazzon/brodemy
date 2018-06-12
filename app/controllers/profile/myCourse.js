module.exports.show = function (application, req, res) {
    const connection = application.config.dbConnection;
    const userDAO = new application.app.models.UserDAO(connection);

    userDAO.showMyCourses(req.session.data, function (result) {
        console.log(result);
        res.render('index', {courses: result, user: req.session.data});
    });
};
module.exports.register = function (application, req, res) {
    let course = req.params;
    const connection = application.config.dbConnection;
    console.log(req.session.data);
    let data = {
        email: req.session.data.email,
        name: req.session.data.name,
        courses: req.session.data.courses,
        password: req.session.data.password
    };
    const userDAO = new application.app.models.UserDAO(connection);
    userDAO.registerOnCourse(course, data);
    res.redirect("/my_courses");

};