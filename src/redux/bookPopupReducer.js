import { BOOK_POPUP_OPEN, BOOK_POPUP_CLOSE } from "./types"

const initialState = {
  book: {},
  image: '',
  popupOpen: false
}

export function bookPopupReducer (state = initialState, action) {
  switch (action.type) {
    case BOOK_POPUP_OPEN:
      return { ...state, book: action.payload.book, image: action.payload.image, popupOpen:true }
    case BOOK_POPUP_CLOSE:
      return { ...state, book: state.book, image: state.image, popupOpen:false }
    default: return state
  }
}