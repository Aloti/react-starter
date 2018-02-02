import React from 'react'
import { array, func, String} from 'prop-types'

import TableRow from './TableRow'

const CRMTable = (props) => {

        return (
          <div className='CRMTable container'>
            <div className='companies row'>
              <div className='col-sm-12'>
                <h2>COMPANIES</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Address</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.companies.map(company => {
                      return <TableRow key={company.id} company={company} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='contacts row'>
              <div className='col-sm-12'>
                <h2>CONTACTS</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Position</th>
                      <th>Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.contacts.map(contact => {
                      return <TableRow key={contact.id} contact={contact} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
}

CRMTable.propTypes = {
    companies: array,
    contacts: array
}

CRMTable.defaultProps = {
    companies: [],
    contacts: []
}

export default CRMTable;