import React from 'react';

function NewKegForm() {
  return (
    <div>
      <style global jsx>{`
          div {
            display: block;
            margin: auto;
            background-color: white;
            text-align: center;
            width: 75vw;
          }
        `}</style>
      <form>
        <input
          type='text'
          id='brand'
          placeholder='Brand' />
        <input
          type='text'
          id='name'
          placeholder='Beer Name' />
        <input
          type='text'
          id='price'
          placeholder='Price' />
        <input
          type='text'
          id='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Confirm Keg</button>
      </form>
    </div>
  );
}

export default NewKegForm;