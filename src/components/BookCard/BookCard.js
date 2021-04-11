import React from 'react';

import noImage from '../../images/no-image.jpg';

function BookCard(props) {

  function image() {
    if (props.book.image) {
      return `https://api.nomoreparties.co${props.book.image.url}`;
    }
    else {
      return noImage;
    }
  }

  return (
    <div className="book-card">
      <img className="book-card__image" alt={''} src={''} />
      <p className="book-card__title">{''}</p>
      <p className="book-card__author">{''}</p>
    </div>
  );
}

export default BookCard;