import React from 'react';

import Header from '../Header/Header';
import BooksCardList from '../BooksCardList/BooksCardList';
import Footer from '../Footer/Footer';

import BooksApi from '../../utils/BooksApi';

function App() {
  const [isBooks, setBooks] = React.useState([]);
  const [isSearch, setSearch] = React.useState("");

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
    console.log(data);
    setSearch(data);
  }

  return (
    <>
      <Header 
        search={search}
      />
      <BooksCardList
        books={isBooks}
      />
      <Footer />
    </>
  );
}

export default App;
