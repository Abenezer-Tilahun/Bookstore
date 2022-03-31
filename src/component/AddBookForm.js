import React from 'react';
import './AddBookForm.css';

function AddBookForm() {
  return (
    <section id="form-section">
      <h2 className={AddBookForm.desc}>Add new book</h2>
      <form id="add-book-form">
        <input type="text" name="title" placeholder="Book title" required />
        <select>
          <option value="">Category</option>
          <option value="saab">Business</option>
          <option value="opel">Leadership</option>
          <option value="audi">History</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </section>
  );
}

export default AddBookForm;
