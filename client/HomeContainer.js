import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Home from './Home'

class HomeContainer extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
  }

  render(){
    return <Home  />
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
          dispatch()
      }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer))