import React from 'react';
import { Text } from 'react-native';
import axios from 'axios';

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
      <Text key={index}>{album.title}</Text>
    );
  }

  render() {
    return this.renderAlbums();
  }
}

export default AlbumList;
