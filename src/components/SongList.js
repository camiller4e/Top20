import React from 'react';

const SongList = (props) => {

  const topSongs = props.songs.map((topSongs) => {
    return <li>{topSongs.title.label}</li>
  })
  return (
    <ol>
      {topSongs}
    </ol>
  )

}

// const SongList = "hi"

export default SongList;
