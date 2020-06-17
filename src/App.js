import React, { Component } from 'react';
import './App.css';
import Banner from './Custom_components/banner_comp';
import People from './Custom_components/people_comp';
import CounterBlock from './Custom_components/toggleBtn';

class App extends Component {
  state = {
    // showPersons:  false,
    components: [
      { id: 1, name: <Banner key='banner' />, show: true, btnText: 'Banner' },
      { id: 2, name: <People key='girlfriends' />, show: false, btnText: 'Friends' },
      { id: 3, name: <People key='more-girlfriends' />, show: false, btnText: 'More Friends' },
      { id: 4, name: <People key='more-more-girlfriends' />, show: false, btnText: 'More More Friends' },
    ],
  };

  // imp
  componentsToggleHandler = (id) => {
    const components = [...this.state.components];
    components.map((curr) => {
      return curr.id === id ? (curr.show = !curr.show) : null;
    });
    this.setState({ components });
  };

  // togglerClasses = (id) => {
  //   // // use string - common class operations
  //   const components = [...this.state.components];
  //   let classes = 'toggler';
  //   components.map((cur) => {
  //     cur.show && cur.id === id ? (classes += ' selected') : null;
  //   });
  //   return classes;

    // // use arrays - complex class operations.
    // const components = [...this.state.components];
    // const classes = ['toggler'];
    // components.map((cur) => {
    //   if(cur.show && cur.id === id) 
    //     classes.push('selected');
    // });
    // return classes.join(' ');
  // };

  fullWidthToggleHandler = (event) => {
    document.querySelector('.dynamic-add').classList.toggle('full-active');
    event.target.classList.toggle('act');
  };

  // imp
  getAddedComponents = () => {
    return this.state.components.map((curr) => {
      return curr.show ? curr.name : null;
    });
  };

  render() {
    return (
      <div className='App'>
        <main>
          {/* <Banner /> */}
          <div className='divider-block'>
            <div className='static-content'>
             
              <CounterBlock 
                pushComponentState = {this.state.components}
                // classes = {this.togglerClasses}
                clicked = {this.componentsToggleHandler}
              />
            </div>

            <div className='dynamic-add'>
              {/* {this.state.components.map(curr => {
                return curr.show ? curr.name : null;
              })} */}
              {this.getAddedComponents()}
              <button className='full-width' id='full' onClick={this.fullWidthToggleHandler}></button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
