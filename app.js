var express = require('express');
const { createEngine } = require('express-react-views');

var app = express();
const port = 3000;


var routes = require('./routes/index');

//app.use('/', routes);

app.set('port', process.env.PORT || 9080);




// set the view directory
app.set('views', __dirname + '/views');

// set jsx or js as the view engine
// (without this you would need to supply the extension to res.render())
// ex: res.render('index.jsx') instead of just res.render('index').
app.set('view engine', 'jsx');

app.engine('jsx', createEngine());

app.get('/', (req, res, next) => {
  res.render('index.jsx', { name: 'world' });
});
// finally, set the custom view

app.listen(
  port,
  () => console.log(`\uD83C\uDF0F running at http://localhost:${port}`)
);
