import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header() {
  var headerStyles = {
    width: '200px'
  };
  return (
    <div>
      <h1><img style={headerStyles} src={logo} /> Tap Room</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Create New Keg</Link>
    </div>
  );
}

export default Header;