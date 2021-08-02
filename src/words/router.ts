import { Router } from 'express';
import { deleteCard, createCard } from './repository';

const router = Router();

router.post('/', async (req, res) => {
  const data = req.body;
  await createCard(data);
  return res.sendStatus(200);
});

router.delete('/:word', async (req, res) => {
  const { word } = req.params;

  try {
    await deleteCard(word);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

export default router;
