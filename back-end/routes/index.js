const express = require('express');
const router = express.Router();

/* GET home page. */
const IndexController = require('../app/controllers/Index');

router.get('/', (req, res) => {
    IndexController.getCourses(req, res);
});
router.post('/',(req,res)=>{
   IndexController.insertCourse(req,res);
});

module.exports = router;
