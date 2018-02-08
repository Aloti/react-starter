import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ClientTable from './ClientTable'
import { getContacts, getContact, deleteContact } from './ClientAction'

class ClientContainer extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.loadData()
  }

  render(){
    return <ClientTable contacts={this.props.contacts} deleteContact={this.props.deleteContact} />
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      contacts: state.contacts
  }
}

function mapDispatchToProps(dispatch){
  return{
      loadData: () => {
          dispatch(getContacts())
      },
      // addTodo: value => dispatch(addClient(value))
      getContact: id => dispatch(getContact(id)),
      deleteContact: id => dispatch(deleteContact(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientContainer))