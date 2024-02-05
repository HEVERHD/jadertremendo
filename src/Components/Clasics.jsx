import React from 'react';
import YouTube from 'react-youtube';

const Clasic = () => {
  const opts = {
    height: '350',
    width: '340',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div id="features">
      <h1>Super Clasicos</h1>
          <YouTube videoId="Pn0d29RU_Xc"  opts={opts}   />
          <YouTube videoId="-CA_8Yel59Q"   opts={opts}  />
    </div>
  );
};

export default Clasic;
