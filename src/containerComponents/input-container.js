import React from 'react';
import InputBlock from './input-block';

const InputContainer = (props) => {
  let arr = [
    {id: 'people', name:
      <InputBlock key="people-editor" 
          pushBtnState_2 = {props.pushBtnState_1}
          change_2 = {props.change_1}
          clickedOn_2 =  {props.clickedOn_1}
          delete_2 =  {props.delete_1}
          add_2 = {props.add_1}
        />},
  ]

  const conditionalRendering = () => {
    return props.check_1.map(curr => {
      return arr.map(elem => {
        if(curr.id === elem.id && curr.show) return elem.name; 
      });
    });
  };

  return ( 
    <section className="input-container">
      {conditionalRendering()}
    </section>
   );
}
 
export default InputContainer;