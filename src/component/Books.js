import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllBooks } from '../redux/books/books';
import book from './BookList.module.css';
import BookList from './BookList';

const Books = ({ books }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  const booklist = books.map((book) => {
    const e = book.id;
    return (
      <BookList
        key={e}
        id={book.id}
        name={book.name}
        author={book.author}
        category={book.category}
      />
    );
  });

  return (
    <div className="pt-12">
      {booklist}
      <hr className={book.divline} />
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Books;
