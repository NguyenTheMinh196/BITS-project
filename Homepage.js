import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

class CamScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <Image
            source={require('../assets/addPicture.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CamScreen;