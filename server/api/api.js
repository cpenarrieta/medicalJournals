var router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/journals', require('./journal/journalRoutes'));

module.exports = router;
