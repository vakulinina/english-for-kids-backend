import { Router } from 'express';
import {
  getCategoryById,
  getCategories,
  deleteCategory,
  createCategory,
  getCardsByCategory,
  updateCategory,
} from './repository';
import Category from './category';

const router = Router();

router.get('/', async (req, res) => {
  const categories = await getCategories();
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const categoryId = req.params.id;
  const category = await getCategoryById(categoryId);
  if (!category) {
    return res.sendStatus(404);
  }
  return res.json(category);
});

router.delete('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    await deleteCategory(categoryId);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send(error);
  }
});

router.post('/', async (req, res) => {
  const data = req.body as Category;
  if (!data.name) return res.sendStatus(400);
  try {
    const newCategory = await createCategory(data);
    return res.json(newCategory);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

router.get('/:id/words', async (req, res) => {
  const categoryId = req.params.id;
  const words = await getCardsByCategory(categoryId);
  return res.json(words);
});

router.patch('/:id', async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;
  try {
    await updateCategory(categoryId, name);
    return res.sendStatus(200);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
});

export default router;
