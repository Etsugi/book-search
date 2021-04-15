import { GET_BOOKS } from "../types"

const initialState = {
  books: [],
  input: ''
}

export function booksReducer (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload
    default: return state
  }
}