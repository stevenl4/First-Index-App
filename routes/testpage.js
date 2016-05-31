/**
 * Created by Steven on 5/30/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('testpage', { 
        title: 'Test Page',
        somedata: 'data'
    });
});

module.exports = router;