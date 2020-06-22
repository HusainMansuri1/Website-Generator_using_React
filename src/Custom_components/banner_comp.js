import React from 'react';

const banner = (props) => {
  return (
    <section className='banner'>
      <h1>{props.pushBanner.heading}</h1>
      <p>{props.pushBanner.para}</p>
    </section>
  );
};

export default banner;
