// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// const 

// // var schema = mongoose.Schema;

// var todoSchema = new Schema({
//     username: String,
//     todo: String,
//     isDone: Boolean,
//     hasAttachement: Boolean
// });

// var Todos = mongoose.model('Todos', todoSchema);

// module.exports = Todos;
const mongoose = require('mongoose');

const todoTaskSchema  = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }, 
    date:{
        type: Date,
        default:Date.now
    }
})
module.exports = mongoose.model('TodoTask', todoTaskSchema);
