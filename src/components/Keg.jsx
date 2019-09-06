import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  var colorCode = {
    color: props.alcoholContent > 5 ? 'red' : 'green'
  };
  return (
    <div>
      <style global jsx>{`
          div {
            display: block;
            margin: auto;
            background-color: white;
            text-align: center;
            width: 75vw;
          }
        `}</style>
      <h3>{props.brand}</h3>
      <h4>{props.name}</h4>
      <p><em>Price: ${props.price}</em></p>
      <p style={colorCode}>ABV: {props.alcoholContent}%</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired
};

export default Keg;
