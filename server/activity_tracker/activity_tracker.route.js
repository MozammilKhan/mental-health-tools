const express = require('express');
const actCtrl = require('./activity_tracker.controller');

const router = express.Router();


router.route('/handledata/:date')
    .post(actCtrl.addday)
    .put(actCtrl.changeday);

router.route('/loadday/:date')
    .get(actCtrl.loadday);


router.route('/loaddata')
    .get(actCtrl.loaddata);



module.exports = router;
