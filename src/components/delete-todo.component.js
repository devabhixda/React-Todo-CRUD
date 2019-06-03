import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTask} from '../actions/postActions.js';
class DeleteTodo extends Component {
constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
};

onSubmit(e){
var confirmation = window.confirm("Are you sure you want to delete?");
if (confirmation) {
  const task_id=this.props.match.params.id;
  this.props.deleteTask(task_id);
  this.props.history.push('/');
}
};

render(){
return (
        <div>
        <h3>Delete Todo</h3>
             <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Delete</button>
        </div>
        )
};
}
DeleteTodo.propRypes={
  deleteTask: PropTypes.func.isRequired
}
export default connect(null, {deleteTask})(DeleteTodo);
