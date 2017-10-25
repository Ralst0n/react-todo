const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const app = express();
const port = process.env.API_PORT || 3002 

//===================Connect to db=============================

const sequelize = new Sequelize('mydb', 'rlawson', 'pass', {
	host: 'localhost',
	dialect: 'postgres',

	pool:{
		max: 5,
		min: 0,
		idle: 10000
	},
});

sequelize.authenticate()
.then(() =>{
	console.log('Connection has been established successfully.');
})
.catch(err => {
	console.error('Unable to connect to the databse:', err);
})
//==============================================================

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	res.send("Did I win?");
})


app.listen(port, () =>{
	console.log(`invoice number api running on ${port}!`)
})