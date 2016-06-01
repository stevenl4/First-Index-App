/**
 * Created by Steven on 5/30/2016.
 */
var express = require('express');
var router = express.Router();

var data = {
    'name': 'Steven',
    'age': 25,
    'gender': 'M'
}
console.log(data);
/* GET testpage page. */
router.get('/', function(req, res, next) {
    res.render('testpage', { 
        title: 'Test Page',
        somedata: data
    });
});

router.get('/nextpage', function(req, res, next) {
    res.render('testpage', {
        title: 'Next Page',
        somedata: data
    });
});
module.exports = router;