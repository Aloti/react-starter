import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import uuid from 'uuid/v1'
import CompanyTable from '../Company/CompanyTable'
import ClientTable from '../Client/ClientTable'
import CompanySingle from '../Company/CompanySingle'
import { addCompany, getCompanies, getCompany, getContacts } from './actions'

class CRMContainer extends Component{

    constructor(props){
        super(props)
        this.state = {
            newTodoVal: ''
        }
    }

    componentDidMount() {
        this.props.loadData()
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
        return this.props.loading
            ?
              <span className="spinnerBig">
                <span className="dot1" />
                <span className="dot2" />
              </span>
            :
        
              <Switch>
                <Route
                  exact 
                  path='/companies'
                  render={(routeProps) => (
                    <CompanyTable {...routeProps} {...this.props} />
                )}
                />
                <Route
                  path='/companies/:id'
                  component={CompanySingle}
                //   render={(routeProps) => (
                //     <CompanySingle {...routeProps} {...this.props} />
                // )}
                />
                <Route
                  exact
                  path='/contacts'
                  render={(routeProps) => (
                    <ClientTable {...routeProps} {...this.props} />
                )}
                />
              </Switch>
      
        
    }


}

function mapStateToProps(state) {
    return {
        loading: state.loading,
        companies: state.companies,
        contacts: state.contacts
    }
}

function mapDispatchToProps(dispatch){
    return{
        loadData: () => {
            dispatch(getContacts())
            dispatch(getCompanies())
        },
        // addTodo: value => dispatch(addCompany(value))
        getCompany: id => dispatch(getCompany(id))
    }
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CRMContainer))
