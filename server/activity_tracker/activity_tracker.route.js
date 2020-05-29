const express = require('express');
const actCtrl = require('./activity_tracker.controller');

const router = express.Router();


router.route('/handledata/:userId')
    .post(actCtrl.addday)
    .put(actCtrl.changeday);

router.route('/:userId/:date')
    .get(actCtrl.loadday);

router.param('userId', actCtrl.loaduser);



module.exports = router;
