var Course = require('../models/course');
var Student = require('../models/student');

var async = require('async');



exports.index = function(req, res) {
/*
    async.parallel({
        course_count: function(callback) {
            Course.count(callback);
        },
        student_count: function(callback) {
            Student.count(callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'BraceCodePug Home', error: err, data: results });
    });
*/

};




// Display list of all courses
exports.course_list = function(req, res, next) {

  Course.find({}, 'name ')
//    .populate('author')
    .exec(function (err, list_courses) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('course_list', { name: 'Course List', course_list: list_courses });
    });
    
};




//    res.send('NOT IMPLEMENTED: Course list');
//};

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
