import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompany } from './CompanyAction'
import CompanyPage from './CompanyPage'

class CompanySingle extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return <CompanyPage id={this.props.match.params.id} />
    }
}

function mapStateToProps(state) {
  return {
      loading: state.loading,
      company: state.company
  }
}

function mapDispatchToProps(dispatch){
  return{
      // addTodo: value => dispatch(addCompany(value))
      getCompany: id => dispatch(getCompany(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanySingle))
