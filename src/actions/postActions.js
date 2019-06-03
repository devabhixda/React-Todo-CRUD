import {ADD_TASK} from './types.js';
import axios from 'axios';
export const addTask = newTodo => dispatch => {
axios.post('http://localhost:8080/tasks', newTodo)
.then((res)=>
dispatch({
  type: ADD_TASK,
  payload: newTodo
})
)
};
