const express = require('express')
const router = express.Router()

const {getExercisePage, runCode} = require('../controllers/exercisePageController')

router.route('/:exercise_id').get(getExercisePage);
router.route('/:exercise_id/run_code').post(runCode);
router.route('/:exercise_id/comments').get

module.exports = router