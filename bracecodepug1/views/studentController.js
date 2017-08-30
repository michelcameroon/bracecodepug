// Display list of all Students
exports.student_list = function(req, res, next) {

  Student.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, list_students) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('student_list', { title: 'Student List', student_list: list_students });
    });

};
