import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <style global jsx>{`
          div {
            background-color: grey;
          }
        `}</style>
      <h3>{props.brand} - {props.name}</h3>
      <p><em>{props.price}</em></p>
      <p>{props.alcoholContent}</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired
};

export default Keg;
