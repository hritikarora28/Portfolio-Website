const express = require('express');
const path = require('path');
const hbs = require('hbs')

const app = express();
const port = process.env.port || 8000;
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname,'../templates/views');
const partialpath = path.join(__dirname,'../templates/partials');

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialpath);

//routing
app.get('', (req, res) => {
	res.render('index');
});
app.get('/about', (req, res) => {
	res.render('about');
});
app.get('/contact', (req, res) => {
	res.render('contact');
});
app.get('*', (req, res) => {
	res.render('404', {
		errormsg: 'Are you lost baby girl',
	});
});

app.listen(port, () => {
	console.log(`Your request is send to port-number ${port}`);
});
