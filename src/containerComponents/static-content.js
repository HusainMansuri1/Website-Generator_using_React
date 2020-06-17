import React from 'react';
import CounterBlock from '../Custom_components/toggleBtn';

const StaticContent = (props) => {
  return ( 
    <div className='static-content'>
      <CounterBlock 
        pushComponentState = {props.pushBtnState}
        clicked = {props.clickedOn}
      />
    </div>
   );
}

export default StaticContent;