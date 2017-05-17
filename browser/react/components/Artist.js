import React from 'react';


export default class extends React.Component{
  componentDidMount(){
    this.props.selectArtist(this.props.params.artistId);
  }

  render(){
    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        <h4>Albums</h4>
        {
          this.props.selectedArtist.albums ?
            this.props.selectedArtist.albums
              .map(album => <h4>{album.name}</h4>)
            : null
        }
        <h4>Songs</h4>
        {
          this.props.selectedArtist.songs ?
            this.props.selectedArtist.songs
              .map(song => <h4>{song.name}</h4>)
            : null
        }
      </div>
    )
  }
}
