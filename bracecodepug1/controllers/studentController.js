var Student = require('../models/student');

// Display list of all Authors
exports.student_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Student list');
};

// Display detail page for a specific Student
exports.student_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Student detail: ' + req.params.id);
};

// Display Student create form on GET
exports.student_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Student create GET');
};

// Handle Student create on POST
exports.student_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Student create POST');
};

// Display Student delete form on GET
exports.student_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Student delete GET');
};

// Handle Student delete on POST
exports.student_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Student update form on GET
exports.student_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Student update GET');
};

// Handle Student update on POST
exports.student_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Student update POST');
};
