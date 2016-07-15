/**
 * Created by boris on 7/15/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    task: String,
    date: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', TodoSchema);

