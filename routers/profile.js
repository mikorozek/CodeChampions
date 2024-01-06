const express = require('express');
const router = express.Router();
const {get_aggregate_stats, get_calendar, get_history} = require('../controllers/profileController')

router.route('/aggregate').get(get_aggregate_stats);
router.route('/calendar').get(get_calendar);
router.route('/history').get(get_history);


module.exports = router