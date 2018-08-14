import React from 'react';

const Song = (props) => {
  return(
    <div className="song">
      <h3 className="song-title">{props.title}</h3>
      {props.children}
    </div>
  )
}

export default Song;
