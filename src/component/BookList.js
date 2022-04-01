import React from 'react';
import PropTypes from 'prop-types';
import book from './BookList.css';

export default function BookList({ name, author, category }) {
  return (
    <div className={book.card}>
      <div className="ml-2">
        <h4>{category}</h4>
        <h1 className={book.mtminus26px}>{name}</h1>
        <p className={book.mtminus26px}>{author}</p>
        <ul className={book.action}>
          <li>Comments</li>
          <li><hr className={book.actionline} /></li>
          <li>Like</li>
          <li><hr className={book.actionline} /></li>
          <li>Edit</li>
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
        <button type="button" className={book.btn}>Remove button</button>
      </div>
    </div>
  );
}

BookList.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
