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
      heading: 'Practise React project',
      para: 'first React project just'
    },

    dynamicComponents: [
      {id: "banner", show: false, btnText: 'banner'},
      {id: "people", show: false, btnText: 'people'},
      {id: "footer", show: false, btnText: 'footer'}
    ],

    phase: {
      Add: false,
      Edit: false,
    } 
  };

  // state change
  componentsToggleHandler = (id) => {
    const dynamicComponents = [...this.state.dynamicComponents];
    dynamicComponents.map((curr) => curr.id === id ? (curr.show = !curr.show) : null);
    this.setState({ dynamicComponents });
  };
  
  // state change
  // getAddedynamicComponentsonents = () => (
  //   this.state.components.map((curr) => curr.show ? curr.name : null)
  // );

  deleteGfHandler = (index, name) => {
    if(window.confirm(`Are you sure you want to remove  "${name}" ?`)){
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

  addHandler = (event) => {
    const people = [...this.state.people];
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
    if(editActive)  editActive.classList.remove('edit-active');
    const currentElement = document.querySelectorAll(`.${Class}`)[index];
    currentElement.scrollIntoView({behavior: 'smooth'});
    currentElement.classList.add('edit-active');
  };

  startHandler = () => {
    const phase = {...this.state.phase}
    phase.Add = true;
    this.setState({phase});
  };

  editHandler = () => { 
    const phase = {...this.state.phase}
    phase.Edit = !phase.Edit;
    if(this.state.dynamicComponents.map(c => {
      if(c.show) this.setState({phase});
    }));
  };

  render() {
    return (
      <div className='App'>
        <button className="start" onClick={this.startHandler}>Start</button>
        <button className="edit" onClick={this.editHandler}>Edit Toggle</button>
        <div className='divider-block'>
          <StaticContent 
            pushBtnState = {this.state} 
            pushBannerState = {this.state.banner}
            change = {this.dashbodChange}
            bannerChange = {this.bannerChange}
            clickedOn  = {this.componentsToggleHandler}
            delete  = {this.deleteGfHandler}
            add = {this.addHandler}
            check = {this.state.dynamicComponents}
            phase = {this.state.phase}
          />

          {this.state.phase.Add ?
          <DyanamicContent
            check = {this.state.dynamicComponents}
            pushPeopleState = {this} 
            pushBannerState = {this.state.banner}
            // onPeopleDelete = {this.deleteGfHandler}
            // onPeopleChange = {this.nameChangeHandler}
            // onPeopleAdd = {this.addHandler}
            // addedynamicComponentsonents = {this.getAddedynamicComponentsonents}
            click={this.scrollInToViewHander}
            phase = {this.state.phase}
          />
          : null
          }
        </div>
      </div>
    );
  };
};

export default App;