import React from 'react';
import SongList from '../components/SongList';

class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
    // this.getSongs = this.getSongs.bind(this)
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(songs => this.setState({songs: songs.feed.entry}));
  }

  // getSongs(){
  //   const songs = this.state.songs.feed.entry[1]
  //   this.setState(songs);
  // }



  render(){
    return (
      <React.Fragment>
        <h1>The UK Hit Top Twenty Popular Hit Songs</h1>
        <SongList songs={this.state.songs}/>
      </React.Fragment>
    )
  }
}


export default SongContainer;
