import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import book from './BookList.css';

const BookList = ({
  id, name, author, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={book.card}>
      <div className="ml-2">
        <h4>{category}</h4>
        <h1 className={book.mtminus26px}>{name}</h1>
        <p className={book.mtminus26px}>{author}</p>
        <ul className={book.action}>
          <li className={book.disabled}>Comments</li>
          <li><hr className={book.actionline} /></li>
          <li>
            <button
              type="button"
              onClick={() => {
                dispatch(removeBook(id));
              }}
            >
              Remove
            </button>
          </li>
          <li><hr className={book.actionline} /></li>
          <li className={book.disabled}>Edit</li>
        </ul>
      </div>
      <div className={book.progress}>
        <div className={book.chart} />
        <div>
          <h1>65%</h1>
          <p className={book.completed}>Completed</p>
        </div>
      </div>
      <div className="mr-7">
        <p>Current Chapter</p>
        <p>Chapter 12</p>
        <button type="button" className={book.btn}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookList;
