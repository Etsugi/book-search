import React from 'react';
import { connect } from 'react-redux';
import { bookPopupOpen } from '../../redux/actions';

import noImage from '../../images/no-image.jpg';

function BookCard(props) {
  const author = props.book.author_name || 'Автор не указан';
  const title = props.book.title || 'Название не указано';
  const image = setImage();

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
    props.bookPopupOpen({book: props.book, image});
  }

  return (
    <div className="book-card">
      <img className="book-card__image" alt={title} src={image} />
      <p className="book-card__title">{title}</p>
      <p className="book-card__author">{author}</p>
      <div onClick={handleClick} className="book-card__overlay"></div>
    </div>
  );
}

const mapDispatchToProps = {
  bookPopupOpen
}

export default connect(null, mapDispatchToProps) (BookCard);