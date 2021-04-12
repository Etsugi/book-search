import React from 'react';

import Header from '../Header/Header';
import BooksCardList from '../BooksCardList/BooksCardList';
import BookPopup from '../BookPopup/BookPopup';
import Footer from '../Footer/Footer';

import BooksApi from '../../utils/BooksApi';

function App() {
  const [isBooks, setBooks] = React.useState([]);
  const [isSearch, setSearch] = React.useState('');
  const [isOpenBookPopup, setOpenBookPopup] = React.useState('false');
  const [selectedBook, setSelectedBook] = React.useState('');

  React.useEffect(() => {
    getBooks(isSearch);
  }, [isSearch]);

  function getBooks(search) {
    BooksApi.getBooks(search)
    .then((data) => {
      setBooks(data.docs);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function search(data) {
    setSearch(data);
  }

  function onBookClick(book) {
    setSelectedBook(book);
    setOpenBookPopup(true);
  }

  function closePopup() {
    setOpenBookPopup(false);
  }

  return (
    <>
      <Header 
        search={search}
      />
      <BooksCardList
        books={isBooks}
        isSearch={isSearch}
        onBookClick={onBookClick}
      />
      <Footer />

      <BookPopup
        isOpenBookPopup={isOpenBookPopup}
        book={selectedBook}
        onClose={closePopup}
      />
    </>
  );
}

export default App;
