import React from 'react';

function SearchForm(props) {
  const [isInput, setInput] = React.useState('');

  React.useEffect(() => {
    //props.search(isInput);
  }, [isInput])

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.search(isInput);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input className="search-form__input" placeholder="Книга, автор" onChange={handleChange}></input>
      <button className="search-form__button-submit" onClick={handleSubmit}>Найти</button>
    </form>
  );
}

export default SearchForm;