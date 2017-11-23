// paths to all file in controller
// serves as the middleware

const express = require('express');
const router = express.Router();

router.use('/center', require('./center'));
router.use('/events', require('./events'));

module.exports = router;