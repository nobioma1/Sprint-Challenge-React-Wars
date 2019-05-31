import React from 'react';

const Character = props => {
  const { name, age, gender, birthYear, height } = props.character;
  return (
    <div className="character">
      <p>{name}</p>
      <div className="details">
        <i>Gender: {gender}</i>
        <i>Age: {age}</i>
        <i>Birth Year: {birthYear}</i>
        <i>Height: {height}</i>
      </div>
    </div>
  );
};

export default Character;
