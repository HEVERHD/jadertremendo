import React from 'react';

const FeatureBox = (props) => {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <a href={props.href}>
          <img src={props.img} alt={props.img} />
        </a>
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default FeatureBox;
