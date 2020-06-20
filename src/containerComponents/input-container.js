import React from 'react';
import InputBlock from './input-block';

const InputContainer = (props) => {
  return ( 
    <section className="input-container">
      <InputBlock 
        pushBtnState_2 = {props.pushBtnState_1}
        change_2 = {props.change_1}
        clickedOn_2 =  {props.clickedOn_1}
        delete_2 =  {props.delete_1}
        add_2 = {props.add_1}
      />
    </section>
   );
}
 
export default InputContainer;