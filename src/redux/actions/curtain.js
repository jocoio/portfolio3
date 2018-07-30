import {TOGGLE_CURTAIN_VISIBILITY, CURTAIN_COLOR} from './types'


export const toggleCurtainVisibility = (visible) => (dispatch, getState)  => {
  dispatch({
    type: TOGGLE_CURTAIN_VISIBILITY,
    payload: visible
  })
}

export const curtainColor = (color) => (dispatch, getState)  => {
  dispatch({
    type: CURTAIN_COLOR,
    payload: color
  })
}