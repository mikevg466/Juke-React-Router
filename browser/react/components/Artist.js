import React from 'react';


export default class extends React.Component{
  componentDidMount(){
    this.props.selectArtist(this.props.params.artistId);
  }

  render(){
    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
    )
  }
}
