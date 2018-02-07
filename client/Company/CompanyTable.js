import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import CompanyRow from './CompanyRow'
import css from '../main.css';

function enumFormatter(cell, row) {
  return (
    <div>
      <Link to={'/companies/'+row['id']} ><i className="fas fa-edit action-icon" /></Link> 
      <button><i className="fas fa-trash-alt action-icon" /></button> 
      <i className="fas fa-eye action-icon" />
    </div>
  )
}

const CompanyTable = (props) => {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h2>COMPANIES</h2>
          <BootstrapTable data={props.companies} striped hover version='4'>
            {/* <TableHeaderColumn dataField='id' isKey hidden>Id</TableHeaderColumn> */}
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
            <TableHeaderColumn dataField='id' isKey dataFormat={enumFormatter}  dataAlign='right' >Actions</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
}

export default CompanyTable