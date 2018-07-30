import { TOGGLE_CURTAIN_VISIBILITY, CURTAIN_COLOR } from '../actions/types'

const initialState = {
  visibility: false,
  color: ["#32b67a", "#fa8072", "#fcd12A"]
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CURTAIN_VISIBILITY: 
      return {
        ...state,
        visibility: action.payload
      };
    case CURTAIN_COLOR:
      return {
        ...state,
        color: action.payload
      }
    default:
      return state;
  }
}