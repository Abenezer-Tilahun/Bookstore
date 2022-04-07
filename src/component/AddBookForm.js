import React from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';
import './AddBookForm.css';

function AddBookForm() {
  let inputName;
  let inputCategory;

  const dispatch = useDispatch();

  return (
    <section id="form-section">
      <h2 className={AddBookForm.desc}>Add new book</h2>
      <form
        id="add-book-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputName.value.trim() || !inputCategory.value.trim()) {
            return;
          }
          const book = {
            id: uuid(),
            name: inputName.value,
            category: inputCategory.value,
            author: 'Abenezer',
          };
          dispatch(addBook(book));
          inputName.value = '';
          inputCategory.value = '';
        }}
      >
        <input type="text" placeholder="Book title" ref={(node) => { inputName = node; }} />
        <select ref={(node) => { inputCategory = node; }}>
          <option value=""> Select a Category</option>
          <option value="Business">Business</option>
          <option value="Leadership">Leadership</option>
          <option value="History">History</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </section>
  );
}

export default AddBookForm;
