import { GET_BOOKS, BOOK_POPUP_OPEN, BOOK_POPUP_CLOSE, PRELOADER_SHOW, PRELOADER_HIDE } from './types'

export function getBooks(books, input) {
  return {
    type: GET_BOOKS,
    payload: { books, input }
  }
}

export function bookPopupOpen(book, image) {
  return {
    type: BOOK_POPUP_OPEN,
    payload: { book, image }
  }
}
export function bookPopupClose(book) {
  return {
    type: BOOK_POPUP_CLOSE,
    payload: book
  }
}

export function preloaderShow(preloader) {
  return {
    type: PRELOADER_SHOW,
    payload: preloader
  }
}
export function preloaderHide(preloader) {
  return {
    type: PRELOADER_HIDE,
    payload: preloader
  }
}