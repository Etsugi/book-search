import { PRELOADER_HIDE, PRELOADER_SHOW } from "../types"

const initialState = {
  preloader: false
}

export function preloaderReducer (state = initialState, action) {
  switch (action.type) {
    case PRELOADER_HIDE:
      return { ...state, preloader: false }
    case PRELOADER_SHOW:
      return { ...state, preloader: true }
    default: return state
  }
}