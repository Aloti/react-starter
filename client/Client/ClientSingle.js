import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getClient } from './ClientAction'
import ClientPage from './ClientPage'

class ClientSingle extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return <ClientPage id={this.props.match.params.id} />
    }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      contact: state.contact
  }
}

function mapDispatchToProps(dispatch){
  return{
      // addTodo: value => dispatch(addClient(value))
      getClient: id => dispatch(getClient(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientSingle))
