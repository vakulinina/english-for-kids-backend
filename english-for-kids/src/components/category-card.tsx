import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { deleteCategory } from '../api/api';

interface Props {
  title: string;
  categoryId: string;
  words: number;
  onUpdateCategories: () => void;
}

const CategoryCard: React.FunctionComponent<Props> = ({
  title, categoryId, onUpdateCategories, words,
}: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleDeleteClick = async () => {
    await deleteCategory(categoryId);
    onUpdateCategories();
  };

  return (
    <li className="admin-category-card">
      {isEditMode
        ? (
          <label className="admin-category-card-input-label" htmlFor="category-input">
            Category Name:
            <input className="admin-category-card-input" defaultValue={title} id="category-input" />
          </label>
        )
        : (
          <>
            <p className="admin-category-card-title">{title}</p>
            <p>{`WORDS: ${words}`}</p>
          </>
        )}
      <div className="admin-category-card-buttons">
        {isEditMode
          ? (
            <>
              <button className="card-button button-edit-mode" onClick={() => setIsEditMode(false)} type="button">Save</button>
              <button className="card-button button-edit-mode cancel-button" onClick={() => setIsEditMode(false)} type="button">Cancel</button>
            </>
          )
          : (
            <>
              <button className="card-button" onClick={() => setIsEditMode(true)} type="button">Update</button>
              <NavLink to={`/admin/${categoryId}/words`}><button className="card-button" type="button">Add word</button></NavLink>
            </>
          )}
      </div>
      <button className="delete-button" onClick={handleDeleteClick} type="button">Delete</button>
    </li>
  );
};

export default CategoryCard;
