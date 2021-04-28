import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/seach-box/search-box.component";

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      breweries: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('breweries.json')
    .then(response => response.json())
    .then(name => this.setState({ breweries: name }))
  }

  handleChange = i => {
    this.setState({ searchField: i.target.value});
  };
  
  render() {
    
    const { breweries, searchField } = this.state;
    const filteredBreweries = breweries.filter(brewery =>
      brewery.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <SearchBox 
          placeholder='search breweries' 
          handleChange={this.handleChange}
        />
        
        <CardList breweries={filteredBreweries}></CardList>
      </div>
    );
  }
}

export default App;
