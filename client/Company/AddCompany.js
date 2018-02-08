import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CompanyForm from './CompanyForm'
import { addCompany, getCompanies } from './CompanyAction'

class AddCompany extends Component{
  constructor(props){
    super(props)
  }

  state = {
    name: '',
    address: '',
    phone: ''
  }

  componentDidMount() {
    this.props.loadData()
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value })
    console.log(this.state)
  }

  addressChange = (e) => {
    this.setState({ address: e.target.value })
    console.log(this.state)
  }

  phoneChange = (e) => {
    this.setState({ phone: e.target.value })
    console.log(this.state)
  }

  addCompany = () => {
    var company = new Object()
    company.name = this.state.name
    company.address = this.state.address
    company.phone = this.state.phone
    this.props.addCompany(company)
  }


  render(){
    return (<CompanyForm
      addCompany={this.addCompany}
      companies={this.props.companies}
      new={this.props.match.params.new} 
      name={this.state.name}
      address={this.state.address}
      phone={this.state.phone}
      nameChange={this.nameChange}
      addressChange={this.addressChange}
      phoneChange={this.phoneChange}
    />)
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      companies: state.companies,
      company: state.company
  }
}

function mapDispatchToProps(dispatch){
  return{
      loadData: () => {
          dispatch(getCompanies())
      },
      // addTodo: value => dispatch(addCompany(value))
      addCompany: company => dispatch(addCompany(company))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCompany))