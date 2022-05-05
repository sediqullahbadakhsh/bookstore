import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, id, category, author,
}) => {
  const dispatch = useDispatch();
  return (
    <li>
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(id));
        }}
      >
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
