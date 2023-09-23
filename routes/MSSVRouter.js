const express = require('express');
const router = express.Router();
const MSSVController = require('../controllers/MSSVController');

router.route('/:id')
  .get(MSSVController.getStudentInfo)
  .post(MSSVController.addStudent);

module.exports = router;