import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  const deleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <div><button type="button" onClick={() => deleteBook(id)}>Remove</button></div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  // category: PropTypes.string.isRequired
};

export default Book;
