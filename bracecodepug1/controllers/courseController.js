var Course = require('../models/course');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all courses
exports.course_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Course list');
};

// Display detail page for a specific course
exports.course_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Course detail: ' + req.params.id);
};

// Display course create form on GET
exports.course_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Course create GET');
};

// Handle course create on POST
exports.course_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Course create POST');
};

// Display course delete form on GET
exports.course_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Course delete GET');
};

// Handle course delete on POST
exports.course_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Course delete POST');
};

// Display course update form on GET
exports.course_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Course update GET');
};

// Handle course update on POST
exports.course_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Course update POST');
};
