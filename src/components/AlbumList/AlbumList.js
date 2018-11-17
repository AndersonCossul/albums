import React from 'react';
import axios from 'axios';

import AlbumDetail from './components/AlbumDetail/AlbumDetail';

class AlbumList extends React.Component {
  state = {
    albums: []
  }

  componentWillMount = () => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({ albums: response.data });
      });
  }

  renderAlbums = () => {
    const { albums } = this.state;
    return albums.map((album, index) =>
      <AlbumDetail key={index} album={album} />
    );
  }

  render() {
    return this.renderAlbums();
  }
}

export default AlbumList;
