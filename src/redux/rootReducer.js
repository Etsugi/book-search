import { combineReducers } from 'redux';
import { booksReducer } from './reducers/booksReducer';
import { bookPopupReducer } from './reducers/bookPopupReducer';
import { preloaderReducer } from './reducers/preloaderReducer';

export const rootReducer = combineReducers({
  books: booksReducer,
  bookPopup: bookPopupReducer,
  preloader: preloaderReducer
})