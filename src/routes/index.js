

const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app){

    app.use('/news',newsRouter);

    app.use('/',siteRouter);
}

module.exports = route;



// app.get('/', (req, res) => {
//   res.render('home');
// });
// app.get('/news', (req, res) => {
//   res.render('news');
// });
// app.get('/search', (req, res) => {
//   res.render('search');
// });


