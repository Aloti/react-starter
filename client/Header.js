import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Immersive's CRM</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link to='/contacts' className="nav-link" >Contacts</Link>
              </li>
              <li className="nav-item">
                <Link to='/companies' className="nav-link" >Companies</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/contacts' className="dropdown-item" >Contacts</Link>
                  <Link to='/companies' className="dropdown-item" >Companies</Link>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
            </ul>
            <a className="nav-link disabled" >Alonso Mondal Durán</a>
          </div>
        </nav>
      </header>
    )
}

  export default Header