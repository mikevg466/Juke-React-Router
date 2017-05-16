import React from 'react';
import Songs from '../components/Songs';

class Album extends React.Component{

  componentDidMount(props){
    this.props.selectAlbum(this.props.routeParams.albumId);
  }

  componentWillReceiveProps(newProps){
    if(this.props.params.albumId !== newProps.params.albumId)
      newProps.selectAlbum(newProps.routeParams.albumId);
  }

  render(props){
    return (
      <div className="album">
        <div>
          <h3>{ this.props.album.name }</h3>
          <img src={ this.props.album.imageUrl} className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}

export default Album;
