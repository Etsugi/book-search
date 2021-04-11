import React from 'react';

import headerPicture from '../../images/book.png';

import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerPicture} alt="Лого сайта"/>
      <SearchForm />
    </header>
  );
}

export default Header;
