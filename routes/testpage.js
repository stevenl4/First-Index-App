/**
 * Created by Steven on 5/30/2016.
 */
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todoItemsdb';
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var data = {
    'name': 'Steven',
    'age': 25,
    'gender': 'M'
}

var todoItems = [];
//     { id: 1, desc: 'foo' },
//     { id: 2, desc: 'bar' },
//     { id: 3, desc: 'baz' }
// ]

mongo.connect(url, function(err, db){
    if (err) throw err
    var collection = db.collection('item');
    collection.find({
        id: {
            $gt: 0
        }
    }, {
        id: 1,
        desc: 1,
        _id: 0
    }).toArray(function (err, docs){
        if (err) throw err;
        docs.forEach(function(item,index){
            todoItems.push(item);
        })
        db.close();
    })
})

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
    var newObj = {
        id: todoItems.length + 1,
        desc: newItem
    };
    mongo.connect(url, function(err, db){
        if (err) throw err
        var collection = db.collection('item');
        collection.insertOne(newObj, function(err, docs){
            if (err) throw err;
            db.close();
        })
    })
    todoItems.push(newObj);
    
    res.redirect('/testpage');
});
module.exports = router;