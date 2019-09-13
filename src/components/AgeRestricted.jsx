import React from 'react';
import PropTypes from 'prop-types';

function AgeRestricted(props) {
    return (
        <div>
            <p>Thank you for visiting, but you are not old enough to interact with this website.</p>
            <p>Please leave now. Feel free to return once you are 21 years or older!</p>
        </div>
    );
}

AgeRestricted.propTypes = {
    onAgeRestricted: PropTypes.func
};

export default AgeRestricted; 