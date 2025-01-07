import React from 'react';
import PropTypes from 'prop-types';
// import { Link }  from 'react-router-dom';


export default function Navbar(props) {

  let mystyle = {
    color : props.color
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={mystyle}>
    <div className="container-fluid" >
      <a className="navbar-brand" href="/" style={mystyle}>{ props.title }</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={mystyle}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" style={mystyle}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/my-react-app/about" style={mystyle}>{ props.about }</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" style={mystyle}>{ props.contact }</a>
          </li>
        </ul>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange = {props.togglemode}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modelabel}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  about : PropTypes.string
};

Navbar.defaultProps = {
  title : "Ati sinder",
  about : "About Us 76"
}


