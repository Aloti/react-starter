import React from 'react'

const ClientRow = (props) => {
    return(
      <tr>
        <td>{props.client.name}</td>
        <td>{props.client.email}</td>
        <td>{props.client.phone}</td>
        <td>{props.client.position}</td>
        <td>{props.client.company}</td>
      </tr>
    )
}

export default ClientRow