import React, {Component} from 'react';
import axios from 'axios';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_description: ''
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const newTodo = {
            todo_description: this.state.todo_description
        }

        axios.post('http://localhost:8080/tasks', newTodo)
        .then((res)=>{
          this.setState({
            todo_description: ''
        })
      })
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                placeholder="Enter the task here"
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateTodo;
