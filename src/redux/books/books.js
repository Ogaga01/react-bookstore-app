const initialState = [];
const ADD_BOOK = 'bookStore/books/ADD_BOOK'
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK'

export const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload,
    }
}

export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        id
    }
}

const bookReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_BOOK:
            return [...state, action.payload];
        case REMOVE_BOOK:
            return state.filter((book) => {book.id !== action.id})
        default: return state
    }

}

export default bookReducer