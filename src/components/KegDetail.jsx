import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  var colorCode = {
    color: props.selectedKeg.alcoholContent > 5 ? 'red' : 'green'
  };
  return (
    <div>
      <hr />
      <h1>{props.selectedKeg.brand} - {props.selectedKeg.name}</h1>
      <h2>Submitted {props.selectedKeg.formattedWaitTime} ago</h2>
      <p style={colorCode}>ABV: {props.selectedKeg.alcoholContent}%</p>
      <h4><em>{props.selectedKeg.price}</em></h4>
      <h5>{props.selectedKeg.flavorDesc}</h5>
      <hr />
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;
