import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Forms';
import { fetchBook } from '../redux/books/books';
import Navbar from './Navbar';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchBook()), []);

  const books = useSelector((state) => state.books);
  return (
    <div>
      <Navbar />
      {Object.keys(books).map((elem) => (
        <Book
          key={elem}
          id={elem}
          title={books[elem][0].title}
          author={books[elem][0].author}
          category={books[elem][0].category}
        />
      ))}
      <div><Form /></div>
    </div>
  );
}

export default Books;
