import React, { Component } from 'react';

let People = ({ name, age, change, current, click }) => {
  return (
    <li onClick={click}>
      <div>
        Name: {name} | Age: {age}
      </div>
      <input type='text' onChange={change} value={name} />
    </li>
  );
};

class PeopleBlock extends Component {
  state = {
    people: [
      { id: 1, name: 'Guess', age: '20' },
      { id: 2, name: 'Guess', age: '21' },
      { id: 3, name: 'Guess', age: '23' },
      { id: 4, name: 'Guess', age: '21' },
      { id: 5, name: 'Guess', age: '17' },
      { id: 6, name: 'Guess', age: '19' },
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

    let change = people.filter((cur) => {
      return cur.id === id;
    });
    change[0].name = event.target.value;

    this.setState({ people });
  };

  render() {
    return (
      <section className='people'>
        <h3>hey Husain, guess your college 's name using thier Age</h3>
        <div className='persons-wrap'>
          <ul className='gf-block'>
            {/* <People name={this.state.people[0].name} age={this.state.people[0].age} click={() => this.getGirlfriendNameHandler('Saloni')} change={this.nameChangeHandler} />} */}
            {this.state.people.map((peop, ind) => (
              <People key={'gf-no-' + peop.id} name={peop.name} age={peop.age} change={(event) => this.nameChangeHandler(event, peop.id)} current={peop} />
            ))}
          </ul>
          <button className="get-gf-btn" onClick={this.getGirlfriendNameHandler} id='next-girlfriend'>
            Get Gf's Names
          </button>
        </div>
      </section>
    );
  }
}

export default PeopleBlock;
