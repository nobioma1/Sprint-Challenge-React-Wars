import React from 'react';
import Character from './Character';
import Pagination from './Pagination';

const AllCharacters = props => {
  const { characters, goNext, nextLink, goPrevious, previousLink } = props;
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
          <Pagination
            goNext={goNext}
            nextLink={nextLink}
            goPrevious={goPrevious}
            previousLink={previousLink}
          />
        </ul>
      ) : (
        <p className="loading">Getting StarWars Characters...</p>
      )}
    </div>
  );
};

export default AllCharacters;
