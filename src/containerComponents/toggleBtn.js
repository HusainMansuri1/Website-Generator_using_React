import React from 'react';

const ToggleButton = ({ current, click, decideClasses }) => {
  return (
    <button id='toggle-persons' className={decideClasses(current.id)} onClick={() => click(current.id)}>
      {current.btnText}
    </button>
  );
};

const CounterBlock = (props) => {
  

  const togglerClasses = (id) => {
    const components = props.pushComponentState;
    let classes = 'toggler';

    components.map((cur) => {
      if(cur.show && cur.id === id) classes += ' selected';
      return true;
    });

    return classes;
  }

  return (
    <div className="counter-block">
      {props.phase.Add ? props.pushComponentState.map(CC => {
        return (
          <ToggleButton 
            key = {`btn-${CC.id}`}
            current = {CC}
            decideClasses={togglerClasses}
            click = {props.clicked}
          />
        )
      }): null}
    </div>
  )
};

export default CounterBlock;
