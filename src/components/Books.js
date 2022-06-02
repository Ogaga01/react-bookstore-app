import { React } from 'react';
import Book from './Book';
import Form from './Forms';

function Books() {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        <li>
          <Book title="book-title" author="my_author" />

        </li>
      </ul>
      <div><Form /></div>
    </div>
  );
}

export default Books;
