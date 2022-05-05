import '../assets/BookList.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';
import AddNew from './AddNew';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    fetchBooks();
  }, [books]);
  return (
    <div className="book-list">
      <ul className="book">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title.title}
            author={book.title.author}
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
