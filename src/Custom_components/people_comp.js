import React from 'react';

const People = ({ current, click, onDeletee }) => {
  return (
    <li onClick={click}>
      <div>
        Name: {current.name} | Age: {current.age}
      </div>
      {/* <input type='text' className="name" onChange={change} value={name} /><br />
      <input type='number' className="age" onChange={change} value={age} /><br /> */}
      {/* <button className="delete-gf-btn" id="delete-gf" onClick={onDeletee}>Delete</button> */}
    </li>
  );
};

const PeopleBlock = (props) => {
    return (
      <section className='people'>
        <h3>hey Husain, guess your college 's name using thier Age</h3>
        <div className='persons-wrap'>
          <ul className='gf-block'>
            {props.pushPeople.state.people.map((peop, ind) => (
              <People key={'gf-no-' + peop.id} 
                current={peop} 
                // change={(event) => props.onpchange(event, peop.id)} 
                onDeletee={() => props.onDelete(ind, peop.name)} 
                click={(event) => props.click(ind, 'input', event)}
              />
            ))}
          </ul>
          {/* <button className="add-gf-btn" id="add-gf" onClick={props.onAdd}>
            Add More Gf
          </button>  */}
          {/* <button className="get-gf-btn" onClick={this.getGirlfriendNameHandler} id='next-girlfriend'>
            Get Gf's Names
          </button> */}
        </div>
      </section>
    );
}

export default PeopleBlock;