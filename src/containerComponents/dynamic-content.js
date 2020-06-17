import React from 'react';

const DyanamicContent = (props) => {
  
  const fullWidthToggleHandler = (event) => {
    document.querySelector('.dynamic-add').classList.toggle('full-active');
    event.target.classList.toggle('act');
  };

  return ( 
    <div className='dynamic-add'>
      {props.addedComponents()}
      <button className='full-width' id='full' onClick={fullWidthToggleHandler}></button>
    </div>
   );
}
 
export default DyanamicContent;