import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({
  title, author, id, category,
}) {
  const dispatch = useDispatch();
  const deleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };
  return (
    <div className="display-book">
      <div className="book-button">
        <div className="book-container">
          <p className="category">{category}</p>
          <h3 className="title">{title}</h3>
          <h4 className="author">{author}</h4>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="submit-button"
          >
            Comment
          </button>
          <button
            className="submit-button"
            type="button"
            onClick={() => deleteBook(id)}
          >
            Remove
          </button>
          <button
            type="button"
            className="submit-button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="book-progress">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask half">
              <div className="fill">
                <div className="inside-circle" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="percentage">50%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className='chapter-progress'>
        <p className='curr-chap'>Current Chapter</p>
        <p className='chapter'>Chapter 17</p>
        <button type='button' className='update'>Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
