import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import categories from './Categories.css';
import { setCategoryStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
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
