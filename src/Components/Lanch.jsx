import React from 'react';
import YouTube from 'react-youtube';

const Lanch = () => {
  const opts = {
    height: '350',
    width: '375',
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
          <YouTube videoId="-Jsk43QnV7U" opts={opts} onReady={onReady}  onPlay={1} />
      </div>
    </div>
  );
};

export default Lanch;
