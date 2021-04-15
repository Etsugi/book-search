import { GET_BOOKS, BOOK_POPUP_OPEN, BOOK_POPUP_CLOSE } from './types'

export function getBooks(books, input) {
  return {
    type: GET_BOOKS,
    payload: { books, input }
  }
}

export function bookPopupOpen(book) {
  return {
    type: BOOK_POPUP_OPEN,
    payload: book
  }
}

export function bookPopupClose(book) {
  return {
    type: BOOK_POPUP_CLOSE,
    payload: book
  }
}