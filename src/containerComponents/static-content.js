import React from 'react';
import CounterBlock from '../Custom_components/toggleBtn';

const StaticContent = (props) => {
  return ( 
    <div className='static-content'>
      <CounterBlock 
        pushComponentState = {props.pushBtnState.dynamicComponents}
        clicked = {props.clickedOn}
      />
        <div className="input-block">
        {props.pushBtnState.people.map((cur, ind) => (
          <div className="input">
            <span>{cur.id}</span> <br></br>
            <input placeholder="name" className="name" value={cur.name} onChange={(event)=> props.change(event,ind)}>
            </input>
            <input placeholder="age" className="age" value={cur.age} onChange={(event)=> props.change(event,ind)}>
            </input>
          </div>
        ))}
        </div>
      {/* <input type='text' className="name" onChange={change} value={name} /><br />
      <input type='number' className="age" onChange={change} value={age} /><br /> */}
    </div>
   );
}

export default StaticContent;