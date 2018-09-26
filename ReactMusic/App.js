import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header.js';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';


export default class App extends React.Component {
  render() {
    console.log(styles);
    return (
      <View style={styles.container}>
        <Header message="Playing from Charts" />
        <AlbumArt url="https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/CalculatingInfinity.jpg/220px-CalculatingInfinity.jpg" />
        <TrackDetails title="43% Burnt"
          artist="Dillinger Escape Plan" />
        <SeekBar trackLength={431} currentPosition={259} />
        <Controls />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});