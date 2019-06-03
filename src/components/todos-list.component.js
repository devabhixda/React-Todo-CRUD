import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {listTask} from '../actions/postActions.js';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_description}>{props.todo.todo_description}</td>
        <td>
            <Link to={"/edit/"+props.todo.task_id}>Edit </Link>
            |
            <Link to={"/delete/"+props.todo.task_id}> Delete</Link>
        </td>
    </tr>
)

class TodosList extends Component {

  componentWillMount() {
  this.props.listTask();
}

  componentDidUpdate(){
    this.props.listTask();
  }
  todoList() {
        return this.props.todo.map(function(currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />;
   });
}

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
};
TodosList.propTypes={
  listTask: PropTypes.func.isRequired,
  todo: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return { todo: state.tasks.tasks };
};

export default connect(mapStateToProps, {listTask})(TodosList);
