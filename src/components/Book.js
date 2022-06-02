import React from 'react';

function Book() {
  const bookStore = {
    id: 1,
    title: '',
    author: '',
  };
  return (

    <>

      <div key={bookStore.id}>
        <h2>{bookStore.title}</h2>
        <h5>{bookStore.author}</h5>
      </div>

    </>
  );
}

export default Book;
