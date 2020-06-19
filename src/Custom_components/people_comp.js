import React, { Component } from 'react';

let People = ({ name, age, change, current, click, onDeletee }) => {
  return (
    <li onClick={click}>
      <div>
        Name: {name} | Age: {age}
      </div>
      <input type='text' className="name" onChange={change} value={name} /><br />
      <input type='number' className="age" onChange={change} value={age} /><br />
      <button className="delete-gf-btn" id="delete-gf" onClick={onDeletee}>Delete</button>
    </li>
  );
};

const PeopleBlock = (props) => {
    return (
      <section className='people'>
        <h3>hey Husain, guess your college 's name using thier Age</h3>
        <div className='persons-wrap'>
          <ul className='gf-block'>
            {/* <People name={this.state.people[0].name} age={this.state.people[0].age} click={() => this.getGirlfriendNameHandler('Saloni')} change={this.nameChangeHandler} />} */}
            {props.pushPeople.people.map((peop, ind) => (
              <People key={'gf-no-' + peop.id} 
                name={peop.name} 
                age={peop.age} 
                current={peop} 
                change={(event) => props.onpchange(event, peop.id)} 
                onDeletee={() => props.onDelete(ind, peop.name)} 
                click={props.click}
              />
            ))}
          </ul>
          <button className="add-gf-btn" id="add-gf" onClick={props.onAdd}>
            Add More Gf
          </button> 
          {/* <button className="get-gf-btn" onClick={this.getGirlfriendNameHandler} id='next-girlfriend'>
            Get Gf's Names
          </button> */}
        </div>
      </section>
    );
}

export default PeopleBlock;