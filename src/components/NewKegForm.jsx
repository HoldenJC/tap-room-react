import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewKegForm(props) {

  let _brand = null;
  let _name = null;
  let _price = null;
  let _alcoholContent = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({ brand: _brand.value, name: _name.value, price: _price.value, alcoholContent: _alcoholContent.value, timeOpen: new Moment() });
    _brand.value = '';
    _name.value = '';
    _price.value = '';
    _alcoholContent.value = '';
    
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => { _brand = input; }} />
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => { _name = input; }} />
        <input
          type='number'
          id='price'
          placeholder='Enter your price'
          ref={(input) => { _price = input; }} />
        <input
          type='number'
          id='alcoholContent'
          placeholder='ABV %'
          ref={(input) => { _alcoholContent = input; }} />
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );

}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;