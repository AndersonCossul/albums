import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import { Card, Button, Divider } from 'react-native-material-ui';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <View style={styles.cardSection}>
        <View style={styles.thumbnailContainer}>
          <Image
            source={{ uri: thumbnail_image }}
            style={styles.thumbnail}
          />
        </View>

        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </View>

      <Divider />

      <View style={styles.cardSection}>
        <Image
          source={{ uri: image }}
          style={styles.mainImage}
        />
      </View>

      <Divider />

      <View style={styles.cardSection}>
        <View style={styles.buttonWrapper}>
          <Button
            raised
            default
            text="More Info"
            onPress={() => Linking.openURL(url)}
            style={{ container: styles.buttonContainer }}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = {
  cardSection: {
    padding: 5,
    flexDirection: 'row'
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  headerTitle: {
    fontSize: 18
  },
  mainImage: {
    height: 300,
    flex: 1,
    marginBottom: 2
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonContainer: {
    backgroundColor: '#ddd'
  }
};

export default AlbumDetail;
