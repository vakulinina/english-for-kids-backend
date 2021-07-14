import { Router } from 'express';
import users from './users';

const router = Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json();
  } else {
    res.status(404).send({ error: 'Username or password incorrect' });
  }
});

export default router;
