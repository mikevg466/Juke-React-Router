import React from 'react';
import Albums from './Albums'
import Songs from './Songs'
import {Link} from 'react-router'

export default class extends React.Component{
  componentDidMount(){
    this.props.selectArtist(this.props.params.artistId);
  }

  render(){
    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
          albums: this.props.selectedArtist.albums || [],
          songs: this.props.selectedArtist.songs || [],
          currentSong: this.props.currentSong,
          isPlaying: this.props.isPlaying,
          toggleOne: this.props.toggleOne
    }

    return (
    <div>
      <h3>{ selectedArtist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${this.props.selectedArtist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${this.props.selectedArtist.id}/songs`}>SONGS</Link></li>
      </ul>
      { children && React.cloneElement(children, propsToPassToChildren) }
    </div>
    )
  }
}
