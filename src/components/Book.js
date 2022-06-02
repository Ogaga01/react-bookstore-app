import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      <div><button type="button">Remove</button></div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
