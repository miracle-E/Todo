
var express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const TodoTask = require('./models/TodoTask');
var bodyParser = require('body-parser');
// var bodyParser = require('body-parser');
// var Todos = require('./models/TodoTask');

var port = process.env.PORT || 3000;

dotenv.config();

// connection to db
mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true}, ()=>{
	console.log('connected to db');
	app.listen(port, () => console.log(`Server running on PORT ${port}\nVisit http://localhost:${port}`));
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static("public"));

app.set('view engine', 'ejs');
// get method
app.get('/', (req,res) => {
	TodoTask.find({}, (err,tasks)=>{
		res.render("todo.ejs", { todoTasks: tasks });
	});
});

// post method
app.post('/',  (req, res)=>{
	const todoTask = new TodoTask ({
		content: req.body.content
		// console.log('req.body');
	});
	try{
		 todoTask.save();

		res.redirect("/");
	} catch (err) {
		res.redirect("/")
	}
});




