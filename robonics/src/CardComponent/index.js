import React from 'react';

import './CardComponent.css';

const CardComponent = ({ name, email, robotId }) => {
  return (
    <div className="CardComponent">
      <div className="ImageContainer">
        <img src={`https://robohash.org/roboId=${robotId}`} alt={robotId}></img>
      </div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default CardComponent;
