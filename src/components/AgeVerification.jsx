import React from 'react';
import PropTypes from 'prop-types';

function AgeVerification(props) {
  return (
    <div>
      <p>Are you 21 years of age or older?</p>
      <button onClick={() => props.onAgeVerification(1)}>Yes</button>
      <button onClick={() => props.onAgeVerification(2)}>No</button>
    </div>
  );
}

AgeVerification.propTypes = {
  onAgeVerification: PropTypes.func
};

export default AgeVerification; 