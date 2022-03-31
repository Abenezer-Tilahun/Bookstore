import React from 'react';
import PropTypes from 'prop-types';
import BookList from '../component/BookList';
import AddBookForm from '../component/AddBookForm';
import './BooksPage.css';

function BooksPage({ books }) {
  return (
    <div id="books-page-wrapper">
      <BookList books={books} />
      <hr />
      <AddBookForm categories={[]} />
    </div>
  );
}

BooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default BooksPage;
