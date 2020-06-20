import React from 'react';

const InputBlock = (props) => (
  <div className="input-block">
    {props.pushBtnState_2.people.map((cur, ind) => (
      <div className="input">
        <span>{cur.id}</span> <br></br>
        <input placeholder="name" className="name" value={cur.name} onChange={(event)=> props.change_2(event,ind)}>
        </input>
        <input type="number" placeholder="age" className="age" value={cur.age} onChange={(event)=> props.change_2(event,ind)}>
        </input><br></br>
        <button onClick={() => props.delete_2(ind, cur.name)}className="delete-gf-btn">delete</button>
      </div>
    ))}
    <button onClick={props.add_2} className="add-gf-btn">add more gf</button>
  </div>
);

export default InputBlock;