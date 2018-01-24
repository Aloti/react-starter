import React, {Component} from 'react'
import { array, func, String} from 'prop-types'
import ListItem from './ListItem'

class TodoList extends Component{
    
    

    constructor(props) {
        super(props);
    }

    render(){   
        return (
          <div className='TodoList'>
            <h1>ToDo List</h1>
            <input id='toDoVal' type='text' value={this.props.toDoVal} onChange={this.props.onChange} /> <button onClick={this.props.addToDo}>Add ToDo Val</button>
            <div className='lists'>
              <h2>ToDo</h2>
              <ul className='not-done'>
                {this.props.todos.filter(function(el){
                            return el.done === false;
                        }).map(function(el){
                            return <ListItem key={el.id} todo={el} addToDo={this.props.addToDo} isDone={this.props.isDone} manageToDo={this.props.manageToDo} />
                        }.bind(this))}
              </ul>
              <h2>Done</h2>
              <ul className='done'>
                {this.props.todos.filter(function(el){
                            return el.done === true;
                        }).map(function(el){
                            return <ListItem key={el.id} todo={el} addToDo={this.props.addToDo} isDone={this.props.isDone} manageToDo={this.props.manageToDo} />
                        }.bind(this))}
              </ul>
            </div>
          </div>
        )
    }
}

TodoList.propTypes = {
    toDoVal: String,
    onChange: func,
    addToDo: func,
    todos: array,
    isDone: func,
    manageToDo: func
}

TodoList.defaultProps = {
    toDoVal: '',
    onChange: () => {},
    addToDo: () => {},
    todos: [],
    isDone: () => {},
    manageToDo: () => {}
}

export default TodoList;