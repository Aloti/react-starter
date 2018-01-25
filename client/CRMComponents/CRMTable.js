import React, {Component} from 'react'
import { array, func, String} from 'prop-types'
import TableRow from './TableRow'

class CRMTable extends Component{
    
    

    constructor(props) {
        super(props);
    }

    render(){   
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
                    {this.props.companies.map(function(el){
                                    return <TableRow key={el.id} company={el} />
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
                    {this.props.contacts.map(function(el){
                                    return <TableRow key={el.id} contact={el} />
                                })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
    }
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