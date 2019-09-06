import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    brand: 'Natural',
    name: 'Natty Light',
    price: '$0.25',
    alcoholContent: '5.0%'
  },
  {
    brand: 'Guinness',
    name: 'Guinness Stout',
    price: '$6.75',
    alcoholContent: '7.5%'
  },
  {
    brand: 'Scott & Irela\'s',
    name: 'Straight Scotch (Beer)',
    price: 'Market value',
    alcoholContent: '9.1%'
  }
];

function KegList(){
  return (
    <div>
      {masterKegList.map((keg, index) =>
        <Keg brand={keg.brand}
          name={keg.name}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
