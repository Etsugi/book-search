import React from 'react';

import noImage from '../../images/no-image.jpg';

function BookCard(props) {
  const author = props.book.author_name || 'Автор не указан';
  const title = props.book.title || 'Название не указано';

  function setImage() {
    if (props.book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`;
    }
    if (props.book.isbn) {
      return `https://covers.openlibrary.org/b/isbn/${props.book.isbn[0]}-M.jpg`;
    }
    else {
      return noImage;
    }
  }

  function handleClick() {
    props.onBookClick(props.book);
  }

  return (
    <div className="book-card">
      <img className="book-card__image" alt={title} src={setImage()} />
      <p className="book-card__title">{title}</p>
      <p className="book-card__author">{author}</p>
      <div onClick={handleClick} className="book-card__overlay"></div>
    </div>
  );
}

export default BookCard;