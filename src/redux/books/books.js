const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const INITIAL_STATE = [];

export const addBook = (payload) => ({
  type: ADD,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};
export default reducer;
