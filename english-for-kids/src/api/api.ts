import Card from '../models/card';
import Category from '../models/category';
import BASE_URL from '../data/url';

const API_URL = `${BASE_URL}/api`;

const getCategories = async (): Promise<Category[]> => {
  const url = `${API_URL}/categories`;
  const response = await fetch(url, { mode: 'cors' });
  const categories = await response.json();
  return categories;
};

const deleteCategory = async (id: string): Promise<void> => {
  const url = `${API_URL}/categories/${id}`;
  await fetch(url, { method: 'DELETE' });
};

const getCardsByCategory = async (id: string): Promise<Card[]> => {
  const url = `${API_URL}/categories/${id}/words`;
  const response = await fetch(url);
  const cards = await response.json();
  return cards;
};

const deleteWord = (word: string) => { };

const login = async (user: { username: string, password: string }): Promise<void> => {
  const url = `${API_URL}/login`;
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
  getCategories, getCardsByCategory, deleteCategory, login, deleteWord,
};
