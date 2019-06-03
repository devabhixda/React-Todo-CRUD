import {ADD_TASK, EDIT_TASK, DELETE_TASK, LIST_TASK} from '../actions/types.js';
const initialState={
  tasks: [],
  task: {}
}
export default function(state=initialState, action){
  switch(action.type){
    case ADD_TASK:
    return{
      ...state,
      task: action.payload
    }
    case EDIT_TASK:
    return{
      ...state,
      task: action.payload
    }
    case DELETE_TASK:
    return{
      ...state,
      task: action
    }
    case LIST_TASK:
    return{
      ...state,
      tasks: action.payload
    }
    default:
    return state;
  }
}
