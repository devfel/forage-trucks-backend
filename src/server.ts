import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);


// localhost:3333
// Aula 2: https://www.youtube.com/watch?v=xK8d5tLptHY (1:03:51)
app.listen(3333);
