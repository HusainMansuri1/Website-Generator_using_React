import React, { Component } from 'react';
import './App.css';
import Banner from './Custom_components/banner_comp';
import People from './Custom_components/people_comp';
import StaticContent from './containerComponents/static-content';
import DyanamicContent from './containerComponents/dynamic-content';

class App extends Component {
  componentsId = 1;
  gfId = 1;

  state = {
    components: [
      { id: this.componentsId++, name: <Banner key='banner' />, show: true, btnText: 'Banner' },
      { id: this.componentsId++, name: <People key='girlfriends' />, show: true, btnText: 'Friends' },
      { id: this.componentsId++, name: <People key='more-girlfriends' />, show: false, btnText: 'More Friends' },
      { id: this.componentsId++, name: <People key='more-more-girlfriends' />, show: false, btnText: 'More More Friends' },
    ],

    people: [
      { id: this.gfId++, name: 'Nashra', age: '20' },
      { id: this.gfId++, name: 'Tanzila', age: '21' },
      { id: this.gfId++, name: 'Juveria', age: '23' },
      { id: this.gfId++, name: 'Guess', age: '21' },
      { id: this.gfId++, name: 'Guess', age: '17' },
      { id: this.gfId++, name: 'Guess', age: '19' },
    ],
  };

  // state change
  componentsToggleHandler = (id) => {
    const components = [...this.state.components];
    components.map((curr) => curr.id === id ? (curr.show = !curr.show) : null);
    this.setState({ components });
  };
  
  // state change
  getAddedComponents = () => (
    this.state.components.map((curr) => curr.show ? curr.name : null)
  );

  render() {
    return (
      <div className='App'>
        <div className='divider-block'>
          {/* <StaticContent pushBtnState={this.state.components} clickedOn = {this.componentsToggleHandler}/> */}
          <div className='static-content'>

          </div>
          <DyanamicContent pushPeopleState={this.state.people} addedComponents={this.getAddedComponents}/>
        </div>
      </div>
    );
  };
};

export default App;
