import React from 'react';
import { connect } from 'react-redux'

import uuid from 'uuid/v1'
import CompanyTable from './CompanyTable'

const CompanyContainer = (props) => {
    
    componentDidMount = () => {
        this.props.loadData()
    }

    render = () => {
        return this.props.loading
        ?
          <span className="spinnerBig">
            <span className="dot1" />
            <span className="dot2" />
          </span>
        :
          <CompanyTable
            companies={this.props.companies}
          /> 
    }


}

