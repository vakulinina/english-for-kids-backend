import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import path from 'path';
import categories from './categories/router';
import users from './users/router';

const app = express();
app.use(cors());
app.use(bodyparser.json());

const publicPath = path.resolve(__dirname, '../frontend');
const publicMediaPath = path.resolve(__dirname, '../public');
const PORT = process.env.PORT || 3000;

app.use('/', express.static(publicPath));
app.use('/public', express.static(publicMediaPath));
app.use('/api/categories', categories);
app.use('/api/login', users);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
