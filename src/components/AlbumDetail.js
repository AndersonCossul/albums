import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnail}
          />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={styles.mainImage}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnail: {
    width: 50,
    height: 50
  },
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  mainImage: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;