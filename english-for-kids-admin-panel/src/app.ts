import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import path from 'path';
import categories from './categories/router';
import users from './users/router';

const app = express();
app.use(cors());
app.use(bodyparser.json());

const publicPath = path.resolve(__dirname, '../public');

app.use('/public', express.static(publicPath));
app.use('/api/categories', categories);
app.use('/api/login', users);

app.listen(3000, () => console.log('server started'));
