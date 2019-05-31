import React, {Component} from 'react';
import axios from 'axios';
class EditTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
    todo_description: ''
}
    }

    componentDidMount() {
         axios.get('http://localhost:8080/tasks/'+this.props.match.params.id)
             .then(response => {
                 this.setState({
                     todo_description: response.data[0].todo_description
                 })
             })
             .catch(function(error) {
                 console.log(error)
             })
     }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description
        };
        axios.put('http://localhost:8080/tasks/'+this.props.match.params.id, obj)
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                        />
                    </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                </form>
            </div>
        )
    }
};
export default EditTodo;
