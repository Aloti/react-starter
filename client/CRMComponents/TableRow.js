import React, {Component} from 'react'
import { object } from 'prop-types'

class TableRow extends Component{
    
    

    constructor(props){
        super(props);

        this.giveTableRow = this.giveTableRow.bind(this)
    }    

    giveTableRow(){
        if(this.props.company.name!=undefined){
            return (
              <tr>
                <td>{this.props.company.name}</td>
                <td>{this.props.company.address}</td>
                <td>{this.props.company.phone}</td>
              </tr>
            )
        }else{
            return (
              <tr>
                <td>{this.props.contact.name}</td>
                <td>{this.props.contact.email}</td>
                <td>{this.props.contact.phone}</td>
                <td>{this.props.contact.position}</td>
                <td>{this.props.contact.company}</td>
              </tr>
            )
        }
    }

    render(){

        return(
            this.giveTableRow()
        )
    }

}

TableRow.propTypes = {
    contact: object,
    company: object
}

TableRow.defaultProps = {
    contact: {},
    company: {}
}

export default TableRow;