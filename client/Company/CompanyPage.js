import React from 'react'
import './../main.css'

const CompanyPage = (props) => {
  console.log(props)
    return (
      <div className='row'>
        <div className='col-sm-12'>
          <h2>{props.id}</h2>
          
        </div>
      </div>
    )
}

export default CompanyPage