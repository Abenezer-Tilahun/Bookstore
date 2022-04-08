import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';
import form from './AddBookForm.module.css';

const AddBookForm = () => {
  let inputName;
  let inputCategory;

  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
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
  };

  const [localState, setState] = useState({
    name: null,
    category: null,
    author: 'Abenezer',
  });

  return (
    <div className="ml-x">
      <h4 className={`primary-font ${form.desc}`}>ADD NEW BOOK</h4>
      <form
        className={form.main}
        onSubmit={submitBookToStore}
      >
        <input
          type="text"
          className="primary-font disabled-black"
          placeholder="Book title"
          ref={(node) => { inputName = node; }}
          onChange={(e) => {
            const State = {
              ...localState,
              name: e.target.value,
            };
            setState(State);
          }}
          maxLength="28"
        />
        <select
          className="primary-font disabled-black"
          ref={(node) => { inputCategory = node; }}
          onChange={(e) => {
            const State = {
              ...localState,
              category: e.target.value,
            };
            setState(State);
          }}
        >
          <option value=""> Select a Category</option>
          <option value="Business">Business</option>
          <option value="Leadership">Leadership</option>
          <option value="History">History</option>
          <option value="Educational">Educational</option>
        </select>
        <button type="submit" className="secondary-font">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBookForm;
