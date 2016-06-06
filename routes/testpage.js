/**
 * Created by Steven on 5/30/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var data = {
    'name': 'Steven',
    'age': 25,
    'gender': 'M'
}

var todoItems = [
    { id: 1, desc: 'foo' },
    { id: 2, desc: 'bar' },
    { id: 3, desc: 'baz' }
]

/* GET testpage page. */
router.get('/', function(req, res, next) {
    res.render('testpage', { 
        title: 'Test Page',
        somedata: data,
        todoItems: todoItems
    });
});

// router.get('/add', function(req, res, next) {
//     res.render('testpage', {
//         title: 'Next Page',
//         somedata: data
//     });
// });

router.post('/add', function(req, res, next) {
    var newItem = req.body.newItem;

    todoItems.push( {
        id: todoItems.length + 1,
        desc: newItem
    });
    
    res.redirect('/testpage');
});
module.exports = router;