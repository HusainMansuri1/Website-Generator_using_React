import React, { Component } from 'react';
import './App.css';
// import Banner from './Custom_components/banner_comp';
// import People from './Custom_components/people_comp';
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
    ],

    banner: {
      heading: 'Get Gf Project',
      para: 'first React project just for fu*k'
    },

    dynamicComponents: [
      {id: "banner", show: true, btnText: 'banner'},
      {id: "people", show: true, btnText: 'people'},
      {id: "footer", show: true, btnText: 'footer'}
    ],
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

  addGfHandler = (event) => {
    // const people = [...this.state.people];
    // let name = window.prompt("Enter name: ");
    // let age = Number(window.prompt("Enter Age: "));
    // if(name && age) {
    //   people.push({ id: this.gfId++, name: name, age: age });
    //   this.setState({ people });
    // } else {
    //   alert("Gf creation failed: Please enter both fields\nName in letters \nAge in Numbers");
    // }

    const people = [...this.state.people];
    // const block = `
    //   <div class="input-block">
    //     <input></input>
    //     <input></input>
    //   </div>
    // `
    // document.querySelector('.input-block').innerHTML += block;

    people.push({ id: this.gfId++, name: '', age: '' })
    this.setState({ people });
  };

  dashbodChange = (event,index) => {
    const people = [...this.state.people];
    event.target.classList.contains('name')
      ?  people[index].name = event.target.value
      :  people[index].age = event.target.value;
    this.setState({ people });
  };

  bannerChange = (event) => {
    const banner = {...this.state.banner};
    event.target.classList.contains('heading')
      ? banner.heading = event.target.value
      : banner.para = event.target.value;
    this.setState({ banner });
  }

  scrollInToViewHander = (index, Class, event) => {
    const editActive = document.querySelector('.edit-active');
    editActive ? editActive.classList.remove('edit-active') : null;
    const currentElement = document.querySelectorAll(`.${Class}`)[index];
    currentElement.scrollIntoView({behavior: 'smooth'});
    currentElement.classList.add('edit-active');
  };

  render() {
    return (
      <div className='App'>
        <div className='divider-block'>
          <StaticContent 
            pushBtnState = {this.state} 
            pushBannerState = {this.state.banner}
            change = {this.dashbodChange}
            bannerChange = {this.bannerChange}
            clickedOn  = {this.componentsToggleHandler}
            delete  = {this.deleteGfHandler}
            add = {this.addGfHandler}
            check = {this.state.dynamicComponents}
          />

          <DyanamicContent
            check = {this.state.dynamicComponents}
            pushPeopleState = {this} 
            pushBannerState = {this.state.banner}
            onPeopleDelete = {this.deleteGfHandler}
            onPeopleChange = {this.nameChangeHandler}
            onPeopleAdd = {this.addGfHandler}
            addedynamicComponentsonents = {this.getAddedynamicComponentsonents}
            click={this.scrollInToViewHander}
          />

        </div>
      </div>
    );
  };
};

export default App;
