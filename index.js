import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
import routes from './src/routes';

// create express server
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// add routes
app.use('/', routes);

// set views folder
app.set('views', path.join(__dirname, 'views'));

// use pug template engine
app.set('view engine', 'pug');

// compile sass files
app.use(sassMiddleware({
    src: path.join(__dirname, 'styles'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed'
}));

// set static public folder
app.use(express.static(path.join(__dirname, 'public')));

// create webserver listening on port 3000
const server = app.listen(3000, () => {
    const {
        address,
        port
    } = server.address();

    console.log(`Example app listening at http://${address}:${port}`);
});