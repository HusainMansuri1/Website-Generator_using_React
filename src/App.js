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
    components: [],
    people: [
      { id: this.gfId++, name: 'Nashra', age: '20'},
      // { id: this.gfId++, name: 'Guess', age: '21' },
      // { id: this.gfId++, name: 'Guess', age: '23' },
      // { id: this.gfId++, name: 'Guess', age: '21' },
      // { id: this.gfId++, name: 'Guess', age: '17' },
      // { id: this.gfId++, name: 'Guess', age: '19' },
    ],
  };

  // Dcom = [<Banner key='banner' />, <People pushPeopleState={this.state.people} key='girlfriends' />];
  componentDidMount(){
    this.setState({
      components: [
        { id: this.componentsId++, name: <Banner key='banner' />, show: false, btnText: 'Banner' },
        { id: this.componentsId++, name: <People delete={this.deleteGfHandler} pushPeopleState={this.state.people} key='girlfriends' />, show: true, btnText: 'Friends' },
        { id: this.componentsId++, name: <People pushPeopleState={this.state.people} key='more-girlfriends' />, show: false, btnText: 'More Friends' },
        { id: this.componentsId++, name: <People pushPeopleState={this.state.people} key='more-more-girlfriends' />, show: false, btnText: 'More More Friends' },
      ],
    })
  };

  deleteGfHandler = (index, name) => {
    // if(window.confirm(`Are you sure you want to delete  "${name}" from your life ?`)){
      const people = [...this.state.people];
      people.splice(index, 1);
      this.setState({ people });
    // }
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
