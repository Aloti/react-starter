import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './../main.css'

class ClientTable extends Component {
  constructor(props){
    super(props)
  }

  actionButtons = (cell, row) => {
    return (
      <button onClick={() => this.props.deleteContact(cell)} ><i className="fas fa-trash-alt" /></button>
    )
  }

  options = {
    afterInsertRow: this.onAfterInsertRow   // A hook for after insert rows
  };

  render(){
    return (
      <div className='row'>
        <div className='col-sm-12 big-wrapper'>
          <h2 className='title'>CONTACTS</h2>
          <Link to="/addContact/new" className="add-button" ><h1 className="fas fa-plus-square" /></Link>
          <BootstrapTable data={this.props.contacts} striped hover version='4'>
            {/* <TableHeaderColumn dataField='id' isKey hidden>Id</TableHeaderColumn> */}
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='email'>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
            <TableHeaderColumn dataField='position'>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='company'>Company</TableHeaderColumn>
            <TableHeaderColumn dataField='id' isKey dataFormat={this.actionButtons}  dataAlign='right' >Actions</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}



export default ClientTable