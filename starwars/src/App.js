import React, { Component } from 'react';
import AllCharacters from './components/AllCharacters';
import './App.css';
import './components/StarWars.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previous: null,
      next: null,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          previous: data.previous,
          next: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = (nextLink) => {
    if (!!nextLink) this.getCharacters(nextLink);
  }

  previous = (previousLink) => {
    if (!!previousLink) this.getCharacters(previousLink);
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="character-container">
          <AllCharacters 
            goPrevious={this.previous}
            previousLink={this.state.previous} 
            goNext={this.next}
            nextLink={this.state.next} 
            characters={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
