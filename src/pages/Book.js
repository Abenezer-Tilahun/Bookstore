import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../component/Books';
import AddBookForm from '../component/AddBookForm';

const Page = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <Books books={books} />
      <AddBookForm />
    </>
  );
};

export default Page;
