const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.API_PORT || 3002 



app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	res.send("Did I win?");
})


app.listen(port, () =>{
	console.log(`invoice number api running on ${port}!`)
})