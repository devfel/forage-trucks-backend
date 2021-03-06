import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// localhost:3333
const port = process.env.PORT || 3333
app.listen(port);