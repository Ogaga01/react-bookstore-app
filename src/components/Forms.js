import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Form() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const bookAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const bookTitle = (e) => {
    setTitle(e.target.value);
  };

  const bookCategory = (e) => {
    setCategory(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(
        addBook(
          {
            id: uuidv4(),
            author,
            title,
            category,
          },
        ),
      );
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };
  return (
    <div className='form-section'>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submit}>
        <input type="text" placeholder="Booktitle" value={title} onChange={bookTitle} required />
        <input type="text" placeholder="Author" value={author} onChange={bookAuthor} required />
        <input type="text" placeholder="Category" value={category} onChange={bookCategory} required />
        <button className="add-book" type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
