import React from 'react';
import PeopleBlock from '../Custom_components/people_comp';
import Banner from '../Custom_components/banner_comp';
import Footer from '../Custom_components/footer';

const DyanamicContent = (props) => {
  
  const fullWidthToggleHandler = (event) => {
    document.querySelector('.dynamic-add').classList.toggle('full-active');
    event.target.classList.toggle('act');
  };

  // let arr = [<Banner />, <PeopleBlock pushPeople={props.pushPeopleState}/>]
  
  let arr = [
    {id: 'banner', name: <Banner key="banner"/>},
    {id: 'people', name: 
      <PeopleBlock 
        key="people" 
        pushPeople={props.pushPeopleState} 
        onDelete = {props.onPeopleDelete}
        onAdd = {props.onPeopleAdd}
        onpchange={props.onPeopleChange}
        click={props.click}
      />
    },
    {id: 'footer', name: <Footer />}
  ]

  const conditionalRendering = () => {
    return props.check.map(curr => {
      return arr.map(elem => {
        if(curr.id === elem.id && curr.show) return elem.name; 
      });
    });
  };

  return ( 
    <div className='dynamic-add'>
      {/* {props.addedComponents()} */}

      {conditionalRendering()}

      <button className='full-width' id='full' onClick={fullWidthToggleHandler}></button>
    </div>
   );
};

export default DyanamicContent;