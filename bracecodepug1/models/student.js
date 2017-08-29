var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = Schema(
  {
    firstName: {type: String, required: true, max: 100},
    lastName: {type: String, required: true, max: 100},
    address: {type: String, required: true, max: 100},
    dateBirth: {type: Date},
   }
);

// Virtual for author's full name
StudentSchema
.virtual('name')
.get(function () {
  return this.lastName + ', ' + this.firstName;
});

// Virtual for author's URL
StudentSchema
.virtual('url')
.get(function () {
  return '/student/' + this._id;
});

//Export model
module.exports = mongoose.model('Student', StudentSchema);
