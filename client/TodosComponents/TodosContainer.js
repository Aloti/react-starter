import React, { Component } from 'react';
import uuid from 'uuid/v1'
import TodoList from './TodoList'

class TodosContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos: [
            ],
            newTodoVal: ''
        }
        this.addToDo = this.addToDo.bind(this);
        this.onChange = this.onChange.bind(this);
        this.isDone = this.isDone.bind(this);
        this.manageToDo = this.manageToDo.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3000/todos')
            .then(response => response.json())
            .then(data => this.setState({ todos: data }));
    }

    onChange(ev){
        this.setState({newTodoVal: ev.target.value})
    }

    addToDo(){
        var todo = {
            id: uuid(),
            value: this.state.newTodoVal,
            done: false
        }
                
        this.setState({todos: [...this.state.todos,todo]})

        this.state.newTodoVal = '';
    }

    isDone(el){
        if(el.done === true){
            return true
        }else{
            return false
        }
    }

    manageToDo(el){
        var newTodo = el;
        newTodo.done=!el.done;

        this.setState({todos: [...this.state.todos.filter(function(e){
            return e.id != el.id;
        }), newTodo]})
    }

    render(){
        return ( <TodoList
          addToDo={this.addToDo}
          onChange={this.onChange}
          todos={this.state.todos} 
          toDoVal={this.state.newTodoVal}
          isDone={this.isDone}
          manageToDo={this.manageToDo}
        /> )
    }
}

export default TodosContainer;