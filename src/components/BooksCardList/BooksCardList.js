import React from 'react';

import BookCard from '../BookCard/BookCard';

import { count, rowCount } from '../../constants/constants';

function BooksCardList() {
  const [books, setBooks] = React.useState([]);
  const [currentBookCount, setCurrentBookCount] = React.useState(rowCount);

  function addBooks() {
    setCurrentBookCount(currentBookCount + (count === 1 ? 2 : count));
  }  

  function handleAddClick() {
    addBooks();
  }
  return (
    <>
      { books.length === 0 ? <p className="books-card-list__not-found">Ничего не найдено</p> 
        : 
          <div className="books-card-list">
            <div className="books-card-list__container">
              {books.slice(0, currentBookCount).map(book => 
                <BookCard 
                  book={book}
                  key={book.id || book.bookId}
                />
              )}
            </div>
            <button
              onClick={handleAddClick}
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