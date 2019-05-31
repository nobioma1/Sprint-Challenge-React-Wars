import React from 'react';
import Character from './Character';

const AllCharacters = ({ characters }) => {
  return (
    <div className="characters">
      {characters.length > 0 ? (
        <ul>
          <h1 className="Header">Characters</h1>
          {characters.map(character => {
            return (
              <li key={character.url}>
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
