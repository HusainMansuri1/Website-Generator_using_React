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
    people: [
      { id: this.gfId++, name: 'Nashra', age: '20' },
      { id: this.gfId++, name: 'Tanzila', age: '21' },
      { id: this.gfId++, name: 'Juveria', age: '23' },
      // { id: this.gfId++, name: 'Guess', age: '21' },
      // { id: this.gfId++, name: 'Guess', age: '17' },
      // { id: this.gfId++, name: 'Guess', age: '19' },
    ],

    dynamicComponents: [
      {id: "banner", show: false, btnText: 'banner'},
      {id: "people", show: true, btnText: 'people'}
    ]
  };

  // state change
  componentsToggleHandler = (id) => {
    const dynamicComponents = [...this.state.dynamicComponents];
    dynamicComponents.map((curr) => curr.id === id ? (curr.show = !curr.show) : null);
    this.setState({ dynamicComponents });
  };
  
  // state change
  getAddedynamicComponentsonents = () => (
    this.state.components.map((curr) => curr.show ? curr.name : null)
  );

  deleteGfHandler = (index, name) => {
    if(window.confirm(`Are you sure you want to remove  "${name}" from your life ?`)){
      const people = [...this.state.people];
      people.splice(index, 1);
      this.setState({ people });
    }
  };

  nameChangeHandler = (event, id) => {
    const people = [...this.state.people];
    let change = people.filter((cur) => cur.id === id);
    event.target.classList.contains('name')
      ? change[0].name = event.target.value
      : change[0].age = event.target.value;
    this.setState({ people });
  };

  addGfHandler = () => {
    const people = [...this.state.people];
    let name = window.prompt("Enter name: ");
    let age = Number(window.prompt("Enter Age: "));
    if(name && age) {
      people.push({ id: this.gfId++, name: name, age: age });
      this.setState({ people });
    } else {
      alert("Gf creation failed: Please enter both fields\nName in letters \nAge in Numbers");
    }
  };

  dashbodChange = (event,index) => {
    const people = [...this.state.people];
    event.target.classList.contains('name')
      ?  people[index].name = event.target.value
      :  people[index].age = event.target.value;
    this.setState({ people });
  }


  render() {
    return (
      <div className='App'>
        <div className='divider-block'>
          <StaticContent 
            pushBtnState={this.state} 
            change={this.dashbodChange}
            clickedOn = {this.componentsToggleHandler}/>

          <DyanamicContent
            check = {this.state.dynamicComponents}
            pushPeopleState = {this.state} 
            onPeopleDelete = {this.deleteGfHandler}
            onPeopleChange = {this.nameChangeHandler}
            onPeopleAdd = {this.addGfHandler}
            addedynamicComponentsonents = {this.getAddedynamicComponentsonents}
            click={this.faltuHandler}
          />

        </div>
      </div>
    );
  };
};

export default App;
