import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  return (
    <div>
      <hr />
      <h1>{props.selectedKeg.names} - {props.selectedKeg.location}</h1>
      <h2>Submitted {props.selectedKeg.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedKeg.issue}</em></h4>
      <hr />
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;
