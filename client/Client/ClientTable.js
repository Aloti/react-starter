import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import ClientRow from './ClientRow'


function enumFormatter(cell, row) {
  return (
    <Link to={'/contacts/'+row['id']} >{cell}</Link>
  )
}

const ClientTable = (props) => {
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h2>Client</h2>
          <BootstrapTable data={props.contacts} striped hover version='4'>
            {/* <TableHeaderColumn dataField='id' isKey hidden>Id</TableHeaderColumn> */}
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='email'>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
            <TableHeaderColumn dataField='position'>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='company'>Company</TableHeaderColumn>
            <TableHeaderColumn dataField='id' isKey dataFormat={enumFormatter}  dataAlign='right' >Actions</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
}



export default ClientTable