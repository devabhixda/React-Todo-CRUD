import {ADD_TASK, EDIT_TASK, DELETE_TASK, LIST_TASK} from './types.js';
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
}
export const deleteTask = task_id => dispatch =>{
axios.delete('http://localhost:8080/tasks/'+task_id)
.then((res)=>
dispatch({
  type: DELETE_TASK
})
)
}
export const listTask = () => dispatch =>{
axios.get('http://localhost:8080/tasks/')
.then((res)=>
dispatch({
  type: LIST_TASK,
  payload: res.data
})
)
}
