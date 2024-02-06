import React from 'react';
import YouTube from 'react-youtube';

const Lanch = () => {
  const opts = {
    height: '350',
    width: '440',
    playerVars: {
      autoplay: 1,

    },
  };

  const onReady = (event) => {
    // You can do something when the player is ready
    console.log('YouTube video has been loaded!');
  };

  return (
    <div id="features">
      <h1>Nuevos candelazos</h1>
      <div className='a-container'>
          <YouTube videoId="r9L1hAA5PDM" opts={opts} onReady={onReady}  onPlay={true} />
      </div>
    </div>
  );
};

export default Lanch;
