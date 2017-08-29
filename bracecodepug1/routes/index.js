var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Require controller modules
var course_controller = require('../controllers/courseController');
var student_controller = require('../controllers/studentController');
//var genre_controller = require('../controllers/genreController');
//var book_instance_controller = require('../controllers/bookinstanceController');

/// COURSE ROUTES ///

/* GET catalog home page. */
router.get('/', course_controller.index);

/* GET request for creating a Book. NOTE This must come before routes that display Book (uses id) */
router.get('/course/create', course_controller.course_create_get);

/* POST request for creating Book. */
router.post('/course/create', course_controller.course_create_post);

/* GET request to delete Book. */
router.get('/course/:id/delete', course_controller.course_delete_get);

// POST request to delete Book
router.post('/course/:id/delete', course_controller.course_delete_post);

/* GET request to update Book. */
router.get('/course/:id/update', course_controller.course_update_get);

// POST request to update Book
router.post('/course/:id/update', course_controller.course_update_post);

/* GET request for one Book. */
router.get('/course/:id', course_controller.course_detail);

/* GET request for list of all Book items. */
router.get('/courses', course_controller.course_list);

/// STUDENT ROUTES ///

/* GET request for creating Author. NOTE This must come before route for id (i.e. display author) */
router.get('/student/create', student_controller.student_create_get);

/* POST request for creating Author. */
router.post('/student/create', student_controller.student_create_post);

/* GET request to delete Author. */
router.get('/student/:id/delete', student_controller.student_delete_get);

// POST request to delete Author
router.post('/student/:id/delete', student_controller.student_delete_post);

/* GET request to update Author. */
router.get('/student/:id/update', student_controller.student_update_get);

// POST request to update Author
router.post('/student/:id/update', student_controller.student_update_post);

/* GET request for one Author. */
router.get('/student/:id', student_controller.student_detail);

/* GET request for list of all Authors. */
router.get('/students', student_controller.student_list);



module.exports = router;
