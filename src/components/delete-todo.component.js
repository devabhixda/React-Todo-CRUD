import React, {Component} from 'react';
import axios from 'axios';
class DeleteTodo extends Component {
constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
};

onSubmit(e){
var confirmation = window.confirm("Are you sure you want to delete?");
if (confirmation) {
  axios.delete('http://localhost:8080/tasks/'+this.props.match.params.id);
  this.props.history.push('/');
}
};

render(){
return (
        <div>
            <form onSubmit={this.onSubmit}>
                  <div>
                  <br/>
                       <input type="submit" value="Delete Todo" className="btn btn-primary" />
                  </div>
            </form>
        </div>
        )
};
}
export default DeleteTodo;
