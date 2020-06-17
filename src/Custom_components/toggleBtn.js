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
    // use string - common class operations
    const components = props.pushComponentState;
    let classes = 'toggler';
    components.map((cur) => {
      if(cur.show && cur.id === id) classes += ' selected';
      return true;
    });
    return classes;

    // // use arrays - complex class operations.
    // const components = props.pushComponentState;
    // const classes = ['toggler'];
    // components.map((cur) => {
    //   if(cur.show && cur.id === id) 
    //     classes.push('selected');
    // });
    // return classes.join(' ');
  }

  return (
    <div className="counter-block">
      {props.pushComponentState.map(CC => {
        return (
          <ToggleButton 
            key = {`btn-${CC.id}`}
            current = {CC}
            decideClasses={togglerClasses}
            click = {props.clicked}
          />
        );
      })}
    </div>
  )
};

export default CounterBlock;
