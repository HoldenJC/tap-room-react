import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  var colorCode = {
    color: props.alcoholContent > 5 ? 'red' : 'green'
  };
  const kegInformation =
    <div>
      <h3>{props.brand} - {props.name}</h3>
      <h4>Beer added {props.formattedWaitTime} ago</h4>
      <p style={colorCode}>ABV: {props.alcoholContent}%</p>
      <h4><em>${props.price}</em></h4>
      <hr />
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => { props.onKegSelection(props.kegId); }}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  flavorDesc: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
