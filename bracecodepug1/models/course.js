var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = Schema({
  name: {type: String, required: true},
});

// Virtual for book's URL
CourseSchema
.virtual('url')
.get(function () {
  return '/course/' + this._id;
});

//Export model
module.exports = mongoose.model('Course', CourseSchema);
