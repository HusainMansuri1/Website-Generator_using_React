import React from 'react';
import PeopleBlock from '../Custom_components/people_comp';
import Banner from '../Custom_components/banner_comp';

const DyanamicContent = (props) => {
  
  const fullWidthToggleHandler = (event) => {
    document.querySelector('.dynamic-add').classList.toggle('full-active');
    event.target.classList.toggle('act');
  };

  let arr = [<Banner />, <PeopleBlock pushPeople={props.pushPeopleState}/>]
  
  return ( 
    <div className='dynamic-add'>
      {/* {props.addedComponents()} */}
      {arr.map(c => c)}
      <button className='full-width' id='full' onClick={fullWidthToggleHandler}></button>
    </div>
   );
}

export default DyanamicContent;