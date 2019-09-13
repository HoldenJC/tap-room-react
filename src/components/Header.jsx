import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header() {
  var headerStyles = {
    width: '200px',
    marginTop: '2vh'
  };
  if (location.href.includes('admin')) {
    return (
      <div>
        <img style={headerStyles} src={logo} />
        <h1> Tap Room </h1>
        <h5>((Administrator))</h5>
        <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <img style={headerStyles} src={logo} />
        <h1> Tap Room</h1>
        <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
        <hr />
      </div>
    );
  }
}

export default Header;