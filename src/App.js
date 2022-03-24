import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Header from './components/Header';
import NoPage from './components/PageNoteFound';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
