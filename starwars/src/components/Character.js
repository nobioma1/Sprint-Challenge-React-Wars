import React from 'react';

const Character = props => {
  const { name, gender, eye_color, birth_year, height } = props.character;
  return (
    <div className="character">
      <p>{name}</p>
      <div className="details">
        <span>Gender: {gender}</span>
        <span>Eye Color: {eye_color}</span>
        <span>Birth Year: {birth_year}</span>
        <span>Height: {height}</span>
      </div>
    </div>
  );
};

export default Character;
