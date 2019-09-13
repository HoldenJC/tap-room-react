import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  var colorCode = {
    color: props.selectedKeg.alcoholContent > 5 ? 'red' : 'green'
  };
  var detailStyle = {
    backgroundColor: '#e3ffce',
  };
  return (
    <div style={detailStyle}>
      <h3>{props.selectedKeg.brand} - {props.selectedKeg.name}</h3>
      <h4><em>Beer added {props.selectedKeg.formattedWaitTime} ago</em></h4>
      <p style={colorCode}>ABV: {props.selectedKeg.alcoholContent}%</p>
      <h4><em>${props.selectedKeg.price}</em></h4>
      <h5>{props.selectedKeg.flavorDesc}</h5>
      <hr />
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;
