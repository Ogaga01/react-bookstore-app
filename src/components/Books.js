import { React } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Forms';

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <h2>Books</h2>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <div><Form /></div>
    </div>
  );
}

export default Books;
