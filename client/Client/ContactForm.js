import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../main.css'


class ContactForm extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
      return (
        <div className='row'>
          <div className='col-sm-12 big-wrapper'>
            <h3 className='margin-bottom title'>CREATE CONTACT</h3>
            <div className='big-wrapper card'>
              <div className='row'>
                <div className='col-sm-6' >
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='nameInput' >Name: </label>
                    </div>
                    <div className='col-sm-8' >
                      <input id='nameInput' type='text' className='input-general' value={this.props.name} onChange={this.props.nameChange} />
                    </div>
                  </div>
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='phoneInput' >Phone: </label>
                    </div>
                    <div className='col-sm-8' >
                      <input id='phoneInput' type='tel' className='input-general' value={this.props.phone} onChange={this.props.phoneChange} />
                    </div>
                  </div>
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='phoneInput' >Email: </label>
                    </div>
                    <div className='col-sm-8' >
                      <input id='phoneInput' type='email' className='input-general' value={this.props.email} onChange={this.props.emailChange} />
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='addressInput' >Position: </label>
                    </div>
                    <div className='col-sm-8' >
                      <input id='positionInput' type='text' className='input-general' value={this.props.position} onChange={this.props.positionChange} />
                    </div>
                  </div> 
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='infoInput' >Company: </label>
                    </div>
                    <div className='col-sm-8' >
                      <input id='companyInput' type='text' className='input-general' value={this.props.company} onChange={this.props.companyChange} />
                    </div>
                  </div>  
                  <div className='row'>
                    <div className='col-sm-2'>
                      <button className='btn btn-success ' onClick={this.props.addContact}>SAVE</button>
                    </div>
                    <div className='col-sm-2'>
                      <Link to='/contacts' className='btn' >CANCEL</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

}

export default ContactForm