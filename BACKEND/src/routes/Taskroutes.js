const express = require('express');
const router = express.Router();

const taskcontroller = require('../controller/taskcontroller');
const Taskvalidation = require('../middlewares/Taskvalidation');
const taskmodel = require('../model/taskmodel');

router.post('/',Taskvalidation,taskcontroller.create);
router.put('/:id',Taskvalidation,taskcontroller.update);
router.delete('/:id',taskcontroller.delete);
router.put('/:id/:done',taskcontroller.done);

router.get('/:id',taskcontroller.show);
router.get('/filter/all/:macaddress', taskcontroller.all);
router.get('/filter/late/:macaddress',taskcontroller.late);
router.get('/filter/today/:macaddress',taskcontroller.today);
router.get('/filter/week/:macaddress',taskcontroller.week);
router.get('/filter/month/:macaddress',taskcontroller.month);
router.get('/filter/year/:macaddress',taskcontroller.year);

module.exports = router; 
