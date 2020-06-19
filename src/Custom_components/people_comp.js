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

class PeopleBlock extends Component {
  gfId = 1;
  state = {
    people: [
      { id: this.gfId++, name: 'Guess', age: '20' },
      { id: this.gfId++, name: 'Guess', age: '21' },
      { id: this.gfId++, name: 'Guess', age: '23' },
      // { id: this.gfId++, name: 'Guess', age: '21' },
      // { id: this.gfId++, name: 'Guess', age: '17' },
      // { id: this.gfId++, name: 'Guess', age: '19' },
    ],
  };

  getGirlfriendNameHandler = () => {
    const persons = ['Sana', 'Nashra', 'Juveria K', 'Juveria M', 'Tanzila', 'Ashfiya'];
    const people = [...this.state.people];

    people.map((current, index) => {
      return persons.filter((cur, ind) => {
        return index === ind ? (current.name = cur) : '';
      });
    });

    this.setState({ people });
  };

  nameChangeHandler = (event, id) => {
    const people = [...this.state.people];
    let change = people.filter((cur) => cur.id === id);
    event.target.classList.contains('name')
      ? change[0].name = event.target.value
      : change[0].age = event.target.value;
    this.setState({ people });
  };

  deleteGfHandler = (index, name) => {
    if(window.confirm(`Are you sure you want to delete  "${name}" from your life ?`)){
      const people = [...this.state.people];
      people.splice(index, 1);
      this.setState({ people });
    }
  };
  
  addGfHandler = () => {
    const people = [...this.state.people];
    let name = window.prompt("Enter name: ");
    let age = Number(window.prompt("Enter Age: "));
    if(name && age) {
      people.push({ id: this.gfId++, name: name, age: age });
      this.setState({ people });
    } else {
      alert("Gf creation failed: Please enter both fields\nName in letters \nAge in Numbers");
    }
  };

  render() {
    return (
      <section className='people'>
        <h3>hey Husain, guess your college 's name using thier Age</h3>
        <div className='persons-wrap'>
          <ul className='gf-block'>
            {/* <People name={this.state.people[0].name} age={this.state.people[0].age} click={() => this.getGirlfriendNameHandler('Saloni')} change={this.nameChangeHandler} />} */}
            {this.state.people.map((peop, ind) => (
              <People key={'gf-no-' + peop.id} onDeletee={() => this.deleteGfHandler(ind, peop.name)} name={peop.name} age={peop.age} change={(event) => this.nameChangeHandler(event, peop.id)} current={peop} />
            ))}
          </ul>
          <button className="add-gf-btn" id="add-gf" onClick={this.addGfHandler}>
            Add More Gf
          </button> 
          <button className="get-gf-btn" onClick={this.getGirlfriendNameHandler} id='next-girlfriend'>
            Get Gf's Names
          </button>
        </div>
      </section>
    );
  }
}

export default PeopleBlock;
