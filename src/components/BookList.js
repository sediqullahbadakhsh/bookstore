import '../assets/BookList.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddNew from './AddNew';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="book-list">
      <ul className="book">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <hr />
      <AddNew />
    </div>
  );
};

export default BookList;
