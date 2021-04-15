import React from 'react';

import Header from '../Header/Header';
import BooksCardList from '../BooksCardList/BooksCardList';
import BookPopup from '../BookPopup/BookPopup';
import Footer from '../Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <BooksCardList/>
      <Footer />

      <BookPopup/>
    </>
  );
}

export default App;
