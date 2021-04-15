import React from 'react';
import { connect } from 'react-redux';

import BookCard from '../BookCard/BookCard';
import Preloader from '../Preloader/Preloader';

import { count, rowCount, notFound, startSearch } from '../../constants/constants';

function BooksCardList(props) {
  const [isMessage, setMessage] = React.useState(startSearch);
  const [currentBookCount, setCurrentBookCount] = React.useState(rowCount);

  React.useEffect(() => {
    message();
  }, [props.books])

  function addBooks() {
    setCurrentBookCount(currentBookCount + (count === 1 ? 2 : count));
  }

  function message() {
    if(props.input.length !== 0) {
      setMessage(notFound);
    } else {
      setMessage(startSearch);
    }
  }

  return (
    <> 
      {props.preloader ? <Preloader/> : 
        <> 
          { props.books.length === 0 ? <p className="books-card-list__not-found">{isMessage}</p> 
          : 
            <div className="books-card-list">
            <div className="books-card-list__container">
              {props.books.slice(0, currentBookCount).map(book => 
                <BookCard 
                  book={book}
                  key={book.key || book.cover_i}
                />
              )}
            </div>
            <button
              onClick={addBooks}
              className={(props.books.slice(currentBookCount).length !== 0) ? 'books-card-list__button' : 'books-card-list__button books-card-list__button_disabled'} 
              type="button"
            >
              Ещё
            </button>
          </div>
          }
        </>
      }
    </>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    input: state.books.input,
    preloader: state.preloader.preloader
  }
}

export default connect(mapStateToProps, null) (BooksCardList);