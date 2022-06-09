import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Forms';
import { fetchBook } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBook()), []);

  const books = useSelector((state) => state.books);
  return (
    <div>
      <h2>Books</h2>
      {Object.keys(books).map((elem) => (
        <Book key={elem} id={elem} title={books[elem][0].title} author={books[elem][0].author} />
      ))}
      <div><Form /></div>
    </div>
  );
}

export default Books;
