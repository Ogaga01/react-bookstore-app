const initialState = [
  {
    id: 1,
    title: '48 Laws of Power',
    author: 'Robert Greene',
  },
  {
    id: 2,
    title: 'Think and Grow Rich',
    author: 'Robert Kiyosaki',
  },
  {
    id: 3,
    title: 'The Subtle Art',
    author: 'Mark Manson',
  },
];
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => (book.id !== action.id));
    default: return state;
  }
};

export default bookReducer;
