const STATUS = 'bookStore/categories/STATUS';
const INITIAL_STATE = [];

export function checkStatus() {
  return {
    type: STATUS,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
}
