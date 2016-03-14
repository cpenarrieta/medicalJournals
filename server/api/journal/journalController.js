var Journal = require('./journalModel');

exports.get = function(req, res, next) {
  Journal.find({})
    .then(function(journals){
      res.json(journals);
    }, function(err){
      next(err);
    });
};

exports.post = function(req, res, next) {
  var newJournal = new Journal(req.body);

  newJournal.save(function(err, journal) {
    if(err) {
      return next(err);
    }
    res.json(journal);
  });
};
