import {ADD_TASK} from './types.js';
import {EDIT_TASK} from './types.js'
import axios from 'axios';
export const addTask = newTodo => dispatch => {
axios.post('http://localhost:8080/tasks', newTodo)
.then((res)=>
dispatch({
  type: ADD_TASK,
  payload: newTodo
})
)
}
export const editTask = (obj,task_id) => dispatch=>{
axios.put('http://localhost:8080/tasks/'+task_id, obj)
.then((res)=>
dispatch({
  type: EDIT_TASK,
  payload: obj
})
)
};
