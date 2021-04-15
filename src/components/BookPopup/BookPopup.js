import React from 'react';
import { connect } from 'react-redux';
import { bookPopupClose } from '../../redux/actions';

function BookPopup(props) {

  return (
    <div className={props.popupOpen === true ? 'popup popup_opened' : 'popup'} >
      <div className="popup__container">
        <img className="popup__image" alt={props.book.title} src={props.image} />
        <p className="popup__text">{props.book.title}</p>
        <p className="popup__text">{props.book.author_name}</p>
        <p className="popup__text">{props.book.first_publish_year}</p>
        <p className="popup__text">{props.book.publisher ? props.book.publisher[0] : 'Издатель не указан'}</p>
        <p className="popup__text">{props.book.isbn ? props.book.isbn[0] : ''}</p>
        <button type="button" onClick={props.bookPopupClose} className="popup__button-close"></button>
      </div>
      <div onClick={props.bookPopupClose} className="popup__overlay"></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    book: state.bookPopup.book,
    image: state.bookPopup.image,
    popupOpen: state.bookPopup.popupOpen
  }
}

const mapDispatchToProps = {
  bookPopupClose
}

export default connect(mapStateToProps, mapDispatchToProps) (BookPopup);