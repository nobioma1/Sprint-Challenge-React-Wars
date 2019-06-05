import React from 'react';
import { BeatLoader } from 'react-spinners';
import Character from './Character';
import Pagination from './Pagination';

const AllCharacters = props => {
  const {
    characters,
    goNext,
    nextLink,
    goPrevious,
    previousLink,
    loading
  } = props;

  return (
    <div className="characters">
      <h1 className="Header">Characters</h1>
      <div className="sweet-loading">
        <BeatLoader
          sizeUnit={'px'}
          size={50}
          color={'#A52A2A'}
          loading={loading}
        />
      </div>
      {characters.length > 0 ? (
        <ul>
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
