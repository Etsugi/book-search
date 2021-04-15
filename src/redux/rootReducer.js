import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import { bookPopupReducer } from './bookPopupReducer';

export const rootReducer = combineReducers({
  books: booksReducer,
  bookPopup: bookPopupReducer
})