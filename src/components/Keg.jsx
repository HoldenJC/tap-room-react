import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  var colorCode = {
    color: props.alcoholContent > 5 ? 'red' : 'green'
  };
  const kegInformation =
    <div>
      <h3>{props.name} - {props.brand}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p style={colorCode}>ABV: {props.alcoholContent}%</p>
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
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
