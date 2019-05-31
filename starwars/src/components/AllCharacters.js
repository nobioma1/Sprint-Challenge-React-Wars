import React from 'react';
import Character from './Character';

const AllCharacters = ({ characters }) => {
  return (
    <div className="characters">
      {characters.length > 0 ? (
        <ul>
          {characters.map(character => {
            return (
              <li>
                <Character character={character} />
              </li> 
            );
          })}
        </ul>
      ) : (
        <p>No Character Available</p>
      )}
    </div>
  );
};

export default AllCharacters;
