import React, { Component } from 'react';
import './App.css';
import LinearSearch from './components/LinearSearch';
import BinarySearch from './components/BinarySearch';

class App extends Component {


  
  render() {
    return (
      <div className="App">
      <LinearSearch title={'Linear Search'} name={'linear-search'}/>
      <BinarySearch title={'Binary Search'} name={'binary-search'} />
      </div>
    );
  }
}

export default App;
