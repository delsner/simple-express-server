import express from 'express';
import jade from 'jade';
import path from 'path';
import routes from './src/routes';

const app = express();

app.use('/', routes);
app.set('/views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));

const server = app.listen(3000, () => {
  const {
    address,
    port
  } = server.address();

  console.log(`Example app listening at http://${address}:${port}`);
});