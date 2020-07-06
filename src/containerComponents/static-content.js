import React from 'react';
import CounterBlock from '../Custom_components/toggleBtn';
import InputContainer from './input-container';

const StaticContent = (props) => {
  return ( 
    <div className='static-content'>
      {
        props.phase.Add ? 
        <CounterBlock 
        pushComponentState = {props.pushBtnState.dynamicComponents}
        clicked = {props.clickedOn}
        check_1={props.check}
        phase = {props.phase}
      />
      : null
      }
      {
      props.phase.Edit ? 
      <InputContainer 
        pushBtnState_1 = {props.pushBtnState}
        change_1 = {props.change}
        clickedOn_1 =  {props.clickedOn}
        delete_1 =  {props.delete}
        add_1 = {props.add}
        check_1 = {props.check}
        bannerChange_1 = {props.bannerChange}
        pushBannerState_1 = {props.pushBannerState}
        phase = {props.phase}
      />
      : null
      }
      {/* <input type='text' className="name" onChange={change} value={name} /><br />
      <input type='number' className="age" onChange={change} value={age} /><br /> */}
    </div>
   );
}

export default StaticContent;