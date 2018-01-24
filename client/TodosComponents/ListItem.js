import React, {Component} from 'react'
import { func, object} from 'prop-types'

class ListItem extends Component{
    
    

    constructor(props){
        super(props);
    }    

    render(){
        return(
          <li>{this.props.todo.value}
            <input type='checkbox' onChange={() => this.props.manageToDo(this.props.todo)} checked={this.props.isDone(this.props.todo)} />
          </li>
        )
    }

}

ListItem.propTypes = {
    todo: object,
    manageToDo: func,
    isDone: func
}

ListItem.defaultProps = {
    todo: {},
    manageToDo: ()=>{},
    isDone: ()=>{}
}

export default ListItem;