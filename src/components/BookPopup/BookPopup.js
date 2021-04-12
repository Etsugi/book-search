import React from 'react';

import noImage from '../../images/no-image.jpg';

function BookPopup(props) {

  function image() {
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

  return (
    <div className={props.isOpenBookPopup === true ? 'popup popup_opened' : 'popup'} >
      <div className="popup__container">
        <img className="popup__image" alt={props.book.title} src={image()} />
        <p className="popup__text">{props.book.title}</p>
        <p className="popup__text">{props.book.author_name}</p>
        <p className="popup__text">{props.book.first_publish_year}</p>
        <p className="popup__text">{props.book.publisher ? props.book.publisher[0] : 'Издатель не указан'}</p>
        <p className="popup__text">{props.book.isbn ? props.book.isbn[0] : ''}</p>
        <button type="button" onClick={props.onClose} className="popup__button-close"></button>
      </div>
      <div onClick={props.onClose} className="popup__overlay"></div>
    </div>
  );
}

export default BookPopup;