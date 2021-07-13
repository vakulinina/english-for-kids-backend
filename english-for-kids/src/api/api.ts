import Card from '../models/card';
import Category from '../models/category';

const BASE_URL = 'http://127.0.0.1:3000/api';

const getCategories = async (): Promise<Category[]> => {
  const url = `${BASE_URL}/categories`;
  const response = await fetch(url);
  return response.json();
};

const deleteCategory = async (id: string): Promise<void> => {
  const url = `${BASE_URL}/categories/${id}`;
  await fetch(url, { method: 'DELETE' });
};

const getCardsByCategory = async (id: string): Promise<Card[]> => {
  const url = `${BASE_URL}/categories/${id}/words`;
  const response = await fetch(url);
  return response.json();
};

export { getCategories, getCardsByCategory, deleteCategory };
