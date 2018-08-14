import React from 'react';

const SongList = (props) => {

  const topSongs = props.songs.map((topSongs) => {
    return <li>{topSongs.title.label}</li>
  })
  return (
    <ul>
      {topSongs}
    </ul>
  )

}

// const SongList = "hi"

export default SongList;
