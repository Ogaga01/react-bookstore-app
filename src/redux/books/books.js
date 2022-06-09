const initialState = {};

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/L8ZmblKm0VJYsGRTbxG9';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SHOW_BOOK = 'bookStore/books/SHOW_BOOK';

export const showBook = (info) => ({
  type: SHOW_BOOK,
  info,
});

export const fetchBook = () => (
  (dispatch) => {
    fetch(`${baseURL}/books`)
      .then((res) => res.json())
      .then((json) => dispatch(showBook(json)));
  }
);

export const addBook = (payload) => (
  (dispatch) => {
    fetch(`${baseURL}/books`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "item_id": payload.id,
        "title": payload.title,
        "author": payload.author,
        "category": 'fiction'
    }),
    })
    .then(() => dispatch(fetchBook()))
  }
) 

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
    case SHOW_BOOK:
      return action.info || state;
    default: return state;
  }
};

export default bookReducer;
