import { React } from 'react';
import Book from './Book';
import Form from './Forms';

function Books() {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        <li>
          <Book />
          <div><button type="button">Remove</button></div>
        </li>
      </ul>
      <div><Form /></div>
    </div>
  );
}

export default Books;
