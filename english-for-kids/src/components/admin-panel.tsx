import React from 'react';
import Category from '../models/category';
import CategoryCard from './category-card';

interface Props {
  categories: Category[];
  onUpdateCategories: () => void;
}

const AdminPanel: React.FunctionComponent<Props> = ({ categories, onUpdateCategories }: Props) => (
  <main>
    <ul className="admin-categories">
      {categories.map((category: Category) => (
        <CategoryCard
          title={category.name}
          key={category.id}
          categoryId={category.id}
          onUpdateCategories={onUpdateCategories}
          words={category.words}
        />
      ))}
    </ul>
  </main>
);

export default AdminPanel;
