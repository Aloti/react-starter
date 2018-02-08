import React, { Component } from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom'
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './../main.css'

class CompanyTable extends Component {
  constructor(props){
    super(props)
  }
  
  onAfterInsertRow = (row) => {
    var company = new Object();
    company.name = row.name
    company.address = row.address
    company.phone = row.phone
    this.props.addCompany(company)
  }
  
  actionButtons = (cell, row) => {
    return (
      <button onClick={() => this.props.deleteCompany(cell)} ><i className="fas fa-trash-alt" /></button>
    )
  }

  options = {
    afterInsertRow: this.onAfterInsertRow   // A hook for after insert rows
  };

  render(){
    return (
      <div className='row'>
        <div className='col-sm-12 big-wrapper'>
          <h2 className='title'>COMPANIES</h2>
          <Link to="/addCompany/new" className="add-button" ><h1 className="fas fa-plus-square" /></Link>
          <br />
          <BootstrapTable data={this.props.companies} insert options={this.options} striped hover version='4'>
            {/* <TableHeaderColumn dataField='id' isKey hidden>Id</TableHeaderColumn> */}
            <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
            <TableHeaderColumn dataField='id' isKey dataFormat={this.actionButtons} hiddenOnInsert />
          </BootstrapTable>
        </div>
      </div>
    )
  }

}

export default CompanyTable