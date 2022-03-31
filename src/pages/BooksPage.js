import React from 'react';
import BookList from '../component/BookList';
import AddBookForm from '../component/AddBookForm';
import './BooksPage.css';

function BooksPage() {
  return (
    <div id="books-page-wrapper">
      <BookList name="Zero to One" author="Peter Thiel" category="Business" />
      <BookList name="Good To Great" author="Jim Collins" category="Leadership" />
      <hr />
      <AddBookForm />
    </div>
  );
}

export default BooksPage;
