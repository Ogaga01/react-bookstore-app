import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Form() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const bookAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const bookTitle = (e) => {
    setTitle(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(
        addBook(
          {
            id: uuidv4(),
            author,
            title,
          },
        ),
      );
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <>
      <h2>Add Book</h2>
      <form onSubmit={submit}>
        <input type="text" placeholder="Booktitle" value={title} onChange={bookTitle} required />
        <input type="text" placeholder="Author" value={author} onChange={bookAuthor} required />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
