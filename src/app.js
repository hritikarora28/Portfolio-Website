const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 8000;
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));

//routing
app.get('', (req, res) => {
	res.send('we are in home page');
});
app.get('/about', (req, res) => {
	res.send('we are in about page');
});
app.get('/contact', (req, res) => {
	res.send('We are in  contact page');
});
app.get('*', (req, res) => {
	res.send('We are 404 error page');
});

app.listen(port, () => {
	console.log(`Your request is send to port-number ${port}`);
});
