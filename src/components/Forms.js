import React from 'react';

function Form() {
  return (
    <>
      <h2>Add Book</h2>
      <form>
        <input type="text" placeholder="Booktitle" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
