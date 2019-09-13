import React from 'react';
import PropTypes from 'prop-types';

function AgeVerification(props) {
  return (
    <div>
      <p>Are you 21 years of age or older?</p>
      <button onClick={props.onAgeVerification}>Yes</button>
      <button onClick={props.onAgeRestricted}>No</button>
    </div>
  );
}

AgeVerification.propTypes = {
  onAgeVerification: PropTypes.func,
  onAgeRestricted: PropTypes.func
};

export default AgeVerification; 