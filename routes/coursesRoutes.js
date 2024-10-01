const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const coursesController = require('../controllers/courseController');

const validationSchema = require('../middlewares/validationSchema')



router.route('/')
  .get(coursesController.getAllCourses)
  .post(
    validationSchema,
    coursesController.createCourse
  );

router.route('/:courseId')
  .get( coursesController.getCourse)
  .patch( coursesController.updateCourse)
  .delete( coursesController.deleteCourse);



module.exports = router