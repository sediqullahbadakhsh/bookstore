const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_SUCCESS = 'bookstore/books/FETCH_SUCCESS';
const INITIAL_STATE = [];

export const addBook = (payload) => ({
  type: ADD,
  payload,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

export const fetchBooksSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NeBZxtMC5rs5lYysZxi6/books',
  );
  const bookData = await response.json();
  const books = Object.entries(bookData).map(([key, value]) => ({
    item_id: key,
    title: value[0].title,
    category: value[0].category,
  }));
  dispatch(fetchBooksSuccess(books));
};
export const removeBook = (id) => async (dispatch) => {
  dispatch(remove(id));
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NeBZxtMC5rs5lYysZxi6/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: { 'Content-type': 'application/JSON' },
    },
  );
};
export const addBookToAPI = (payload) => async (dispatch) => {
  dispatch(addBook(payload));
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NeBZxtMC5rs5lYysZxi6/books',
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-type': 'application/JSON' },
    },
  );
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};
export default reducer;
