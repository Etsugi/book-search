import React from 'react';

import BookCard from '../BookCard/BookCard';

import { count, rowCount, notFound, startSearch } from '../../constants/constants';

function BooksCardList(props) {
  const [isMessage, setMessage] = React.useState(startSearch);
  const [books, setBooks] = React.useState([]);
  const [currentBookCount, setCurrentBookCount] = React.useState(rowCount);

  React.useEffect(() => {
    message();
    setBooks(props.books);
  }, [props.books])

  function addBooks() {
    setCurrentBookCount(currentBookCount + (count === 1 ? 2 : count));
  }

  function message() {
    if(props.isSearch.length !== 0) {
      setMessage(notFound);
    } else {
      setMessage(startSearch);
    }
  }

  return (
    <>
      { books.length === 0 ? <p className="books-card-list__not-found">{isMessage}</p> 
        : 
          <div className="books-card-list">
            <div className="books-card-list__container">
              {books.slice(0, currentBookCount).map(book => 
                <BookCard 
                  book={book}
                  key={book.key || book.cover_i}
                />
              )}
            </div>
            <button
              onClick={addBooks}
              className={(books.slice(currentBookCount).length !== 0) ? 'books-card-list__button' : 'books-card-list__button books-card-list__button_disabled'} 
              type="button"
            >
              Ещё
            </button>
          </div>
      }
    </>
  );
}

export default BooksCardList;