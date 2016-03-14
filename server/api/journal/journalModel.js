var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JournalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('journal', JournalSchema);
