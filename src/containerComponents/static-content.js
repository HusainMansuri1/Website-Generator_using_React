import React from 'react';
import CounterBlock from '../Custom_components/toggleBtn';
import InputContainer from './input-container';

const StaticContent = (props) => {
  return ( 
    <div className='static-content'>
      <CounterBlock 
        pushComponentState = {props.pushBtnState.dynamicComponents}
        clicked = {props.clickedOn}
      />
      
      <InputContainer 
        pushBtnState_1 = {props.pushBtnState}
        change_1 = {props.change}
        clickedOn_1 =  {props.clickedOn}
        delete_1 =  {props.delete}
        add_1 = {props.add}
        conditionalRendering = {props.addedynamicComponentsonents}
        check_1 = {props.check}
      />

      {/* <input type='text' className="name" onChange={change} value={name} /><br />
      <input type='number' className="age" onChange={change} value={age} /><br /> */}
    </div>
   );
}

export default StaticContent;