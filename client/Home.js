import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './main.css'

class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className='row big-wrapper' >
        <div className='col-sm-12'>
          <div className='row center-content margin-bottom'>
            <img  alt='logo' src='https://s3.amazonaws.com/media.freshgigs.ca/company_logos/5516/details/brainstation.png?1483075460' />
          </div>
          <div className='row' >
            <div className='col-sm-6 center-content'>
            
              <div className='row' >
                <h2 className='title center-content wrapper' >VIEW COMPANIES </h2>
              </div>
              <div className='row' >
                <Link to='/companies'> <img className='home-button wrapper' alt='company' src='http://acsu.cornell.edu/img/icons/company.png' /> </Link>
              </div>
            </div>
            <div className='col-sm-6 center-content'>
              <div className='row' >
                <h2 className='title center-content wrapper' >VIEW CONTACTS </h2>
              </div>
              <div className='row' >
                <Link to='/contacts' ><img className='home-button wrapper' alt='contact' src='http://www.gaby-moreno.com/administrator/public_html/css/ionicons/png/512/android-contact.png' /> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Home