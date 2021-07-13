import React, { useState } from 'react';

interface Props {
  title: string;
}

const CategoryCard: React.FunctionComponent<Props> = ({ title }: Props) => {
  const [isEditMode, setIsEditMode] = useState(false);

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
            <p>WORDS: 0</p>
          </>
        )}
      <div className="admin-category-card-buttons">
        {isEditMode
          ? (
            <>
              <button className="card-button button-edit-mode" type="button" onClick={() => setIsEditMode(false)}>Save</button>
              <button className="card-button button-edit-mode cancel-button" type="button" onClick={() => setIsEditMode(false)}>Cancel</button>
            </>
          )
          : (
            <>
              <button className="card-button" type="button" onClick={() => setIsEditMode(true)}>Update</button>
              <button className="card-button" type="button">Add word</button>
            </>
          )}
      </div>
      <button className="delete-button" type="button">Delete</button>
    </li>
  );
};

export default CategoryCard;
