import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ContactForm from './ContactForm'
import { addContact, getContacts } from './ClientAction'

class AddContact extends Component{
  constructor(props){
    super(props)
  }

  state = {
    name: '',
    email: '',
    phone: '',
    position: '',
    company: '',
  }

  componentDidMount() {
    this.props.loadData()
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  emailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  phoneChange = (e) => {
    this.setState({ phone: e.target.value })
  }

  positionChange = (e) => {
    this.setState({ position: e.target.value })
  }

  companyChange = (e) => {
    this.setState({ company: e.target.value })
  }

  addContact = () => {
    var contact = new Object()
    contact.name = this.state.name
    contact.email = this.state.email
    contact.phone = this.state.phone
    contact.position = this.state.position
    contact.company = this.state.company
    this.props.addContact(contact)
  }


  render(){
    return (<ContactForm
      addContact={this.addContact}
      new={this.props.match.params.new} 
      name={this.state.name}
      email={this.state.email}
      phone={this.state.phone}
      position={this.state.position}
      company={this.state.company}
      nameChange={this.nameChange}
      emailChange={this.emailChange}
      phoneChange={this.phoneChange}
      positionChange={this.positionChange}
      companyChange={this.companyChange}
    />)
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      contacts: state.companies,
      contact: state.contacts
  }
}

function mapDispatchToProps(dispatch){
  return{
      loadData: () => {
          dispatch(getContacts())
      },
      // addTodo: value => dispatch(addCompany(value))
      addContact: contact => dispatch(addContact(contact))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddContact))