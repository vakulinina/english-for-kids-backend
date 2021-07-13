import React from 'react';
import Category from '../models/category';
import CategoryCard from './category-card';

interface Props {
  categories: Category[];
}

const AdminPanel: React.FunctionComponent<Props> = ({ categories }: Props) => (
  <main>
    <ul className="admin-categories">
      {categories.map((category: Category) => (
        <CategoryCard title={category.name} key={category.id} />
      ))}
    </ul>
  </main>
);

export default AdminPanel;
