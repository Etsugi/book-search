import React from 'react';

function SearchForm() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input className="search-form__input" placeholder="Книга, автор"></input>
      <button className="search-form__button-submit" onClick={handleSubmit}>Найти</button>
    </form>
  );
}

export default SearchForm;