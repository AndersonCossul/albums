import React from 'react';
import { View } from 'react-native';
import { Subheader, Divider } from 'react-native-material-ui';

const Header = (props) => (
  <View>
    <Subheader
      text={props.title}
      style={styles.subHeader}
    />
    <Divider />
  </View>
);

const styles = {
  subHeader: {
    container: {
      alignSelf: 'center'
    },
    text: {
        fontSize: 20
    }
  }
};

export default Header;
