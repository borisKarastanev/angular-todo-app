/**
 * Created by boris on 7/15/16.
 */


// Node core modules
var path = require('path');

// Express modules
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todos');

// App modules
var Todo = require(path.join(__dirname, 'db', 'todoModel'));

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

router.use(function (req, res, next) {
    next();
});

router.route('/todos')
        .get(function (req, res) {
            Todo.find(function (err, todos) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(todos);
                }
            });
        })
        .post(function (req, res) {
            var todo = new Todo();
            todo.task = req.body.task;
            todo.save(function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json({message: 'Successfully saved new task'});
                }
            });
            console.log(req.body);
        });

app.use('/api', router);
app.listen(3000);


