import React from 'react';
import { connect } from 'react-redux';
import { getBooks, preloaderShow, preloaderHide } from '../../redux/actions';

import BooksApi from '../../utils/BooksApi';

function SearchForm(props) {
  const [isInput, setInput] = React.useState('');
  const [isTimerId, setTimerId] = React.useState(false);

  React.useEffect(() => {
      if(isTimerId === false) {
        timerStart();
      } else {
        timerStop()
      }
  }, [isInput])

  function timerStart() {
    if(isInput.length !== 0) {
      let timerId = setTimeout(timer, 2000);
      setTimerId(timerId);
    }
  }
  
  function timerStop() {
    clearTimeout(isTimerId);
    timerStart();
  }

  function timer() {
    searchBooks(isInput);
    setTimerId(false)
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(isInput.trim().length !== 0) {
      searchBooks(isInput);
    }
  }

  function searchBooks(isInput) {
    props.preloaderShow();
    BooksApi.searchBooks(isInput)
    .then((data) => {
      props.getBooks(data.docs, isInput);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      props.preloaderHide();
    })
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input className="search-form__input" placeholder="Книга, автор" onChange={handleChange}></input>
      <button className="search-form__button-submit" onClick={handleSubmit}>Найти</button>
    </form>
  );
}

const mapDispatchToProps = {
  getBooks,
  preloaderShow,
  preloaderHide
}

export default connect(null, mapDispatchToProps) (SearchForm);