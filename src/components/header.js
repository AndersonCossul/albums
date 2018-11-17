import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{ props.title }</Text>
  </View>
);

const styles = {
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
};

export default Header;
