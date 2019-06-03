import {ADD_TASK, EDIT_TASK} from '../actions/types.js';
const initialState={
  items: [],
  item: {}
}
export default function(state=initialState, action){
  switch(action.type){
    case ADD_TASK:
    return{
      ...state,
      items: action.payload
    }
    case EDIT_TASK:
    return{
      ...state,
      items: action.payload
    }
    default:
    return state;
  }
}
