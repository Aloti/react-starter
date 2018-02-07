import React from 'react'
import { object } from 'prop-types'

const CompanyRow = (props) => {
    return(
      <tr>
        <td>{props.company.name}</td>
        <td>{props.company.address}</td>
        <td>{props.company.phone}</td>
      </tr>
    )
}

CompanyRow.propTypes = {
    company: object
}

CompanyRow.defaultProps = {
    company: {}
}

export default CompanyRow