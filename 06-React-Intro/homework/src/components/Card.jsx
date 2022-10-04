import React from 'react';


function Card({ max, min, name, img, onClose }) {
  console.log('entro a card')
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}>x</button>
      <h3>{name}</h3> 
      <div>
        <p>Min</p>
        <p>{min}</p>
        <p>Max</p>
        <p>{max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
    </div>
  );
};

export default Card;
