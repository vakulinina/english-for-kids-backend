import Card from '../models/card';
import Category from '../models/category';

const BASE_URL = 'http://127.0.0.1:3000/api';

const getCategories = async (): Promise<Category[]> => {
  const url = `${BASE_URL}/categories`;
  const response = await fetch(url);
  const categories = await response.json();
  return categories;
};

const deleteCategory = async (id: string): Promise<void> => {
  const url = `${BASE_URL}/categories/${id}`;
  await fetch(url, { method: 'DELETE' });
};

const getCardsByCategory = async (id: string): Promise<Card[]> => {
  const url = `${BASE_URL}/categories/${id}/words`;
  const response = await fetch(url);
  const cards = await response.json();
  return cards;
};

const login = async (user: { username: string, password: string }): Promise<void> => {
  const url = `${BASE_URL}/login`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (response.status !== 200) {
    return Promise.reject(await response.json());
  }
  return Promise.resolve();
};

export {
  getCategories, getCardsByCategory, deleteCategory, login,
};
