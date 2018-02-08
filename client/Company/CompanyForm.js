import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './../main.css'


class CompanyForm extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
      return (
        <div className='row'>
          <div className='col-sm-12 big-wrapper'>
            <h3 className='margin-bottom title'>CREATE COMPANY</h3>
            <div className='big-wrapper card'>
              <div className='row'>
                <div className='col-sm-6' >
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='nameInput' >Name: </label>
                    </div>
                    <div className='col-sm-8' >
                      <input id='nameInput' type='text' className='input-general'  onChange={this.props.nameChange} />
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
                </div>
                <div className='col-sm-6'>
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='addressInput' >Address: </label>
                    </div>
                    <div className='col-sm-8' >
                      <textarea id='addressInput' className='input-general' value={this.props.address} onChange={this.props.addressChange} />
                    </div>
                  </div> 
                  <div className='row margin-bottom'>
                    <div className='col-sm-4' >
                      <label htmlFor='infoInput' >Info: </label>
                    </div>
                    <div className='col-sm-8' >
                      <textarea id='infoInput' className='input-general' />
                    </div>
                  </div>  
                  <div className='row'>
                    <div className='col-sm-2'>
                      <button className='btn btn-success ' onClick={this.props.addCompany}>SAVE</button>
                    </div>
                    <div className='col-sm-2'>
                      <button className='btn' >CANCEL</button>
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

export default CompanyForm