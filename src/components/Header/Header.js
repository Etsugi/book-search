import React from 'react';

import headerPicture from '../../images/book.png';

import SearchForm from '../SearchForm/SearchForm';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={headerPicture} alt="Лого сайта"/>
      <SearchForm />
    </header>
  );
}

export default Header;
