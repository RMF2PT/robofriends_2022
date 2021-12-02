import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className='bg-gradient-to-r from-indigo-400 to-green-800 w-full h-screen'>
        <div className='flex flex-col items-center'>
          <h1 className='uppercase text-4xl p-2 text-green-400 mt-4'>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App