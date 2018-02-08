import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CompanyTable from './CompanyTable'
import { getCompanies, getCompany, deleteCompany } from './CompanyAction'

class CompanyContainer extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.loadData()
  }

  render(){
    return <CompanyTable companies={this.props.companies} deleteCompany={this.props.deleteCompany} addCompany={this.props.addCompany} />
  }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      companies: state.companies
  }
}

function mapDispatchToProps(dispatch){
  return{
      loadData: () => {
          dispatch(getCompanies())
      },
      // addTodo: value => dispatch(addCompany(value))
      getCompany: id => dispatch(getCompany(id)),
      deleteCompany: id => dispatch(deleteCompany(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyContainer))