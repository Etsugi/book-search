import React from 'react';

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
    let timerId = setTimeout(timer, 2000);
    setTimerId(timerId);
  }
  
  function timerStop() {
    clearTimeout(isTimerId);
    timerStart();
  }

  function timer() {
    props.search(isInput);
    setTimerId(false)
  }

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