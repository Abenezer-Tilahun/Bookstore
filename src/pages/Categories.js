import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import categories from './Categories.css';
import { setCategoryStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  return (
    <button
      type="button"
      className={categories.btn}
      onClick={() => {
        dispatch(setCategoryStatus('Under Construction'));
      }}
    >
      {status}
    </button>
  );
};

export default Categories;
