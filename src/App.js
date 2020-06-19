import React, { Component } from 'react';
import './App.css';
import Banner from './Custom_components/banner_comp';
import People from './Custom_components/people_comp';
import StaticContent from './containerComponents/static-content';
import DyanamicContent from './containerComponents/dynamic-content';

class App extends Component {
  componentsId = 1;
  state = {
    components: [
      { id: this.componentsId++, name: <Banner key='banner' />, show: true, btnText: 'Banner' },
      { id: this.componentsId++, name: <People key='girlfriends' />, show: true, btnText: 'Friends' },
      { id: this.componentsId++, name: <People key='more-girlfriends' />, show: false, btnText: 'More Friends' },
      { id: this.componentsId++, name: <People key='more-more-girlfriends' />, show: false, btnText: 'More More Friends' },
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
          <StaticContent pushBtnState={this.state.components} clickedOn = {this.componentsToggleHandler}/>
          <DyanamicContent addedComponents={this.getAddedComponents}/>
        </div>
      </div>
    );
  };
};

export default App;
