/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { VLCPlayer } from 'react-native-vlc-media-player';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const height = (Dimensions.get('window').width * 3) / 4;

declare const global: { HermesInternal: null | {} };

const App = () => {
  const [error, setError] = useState(undefined);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          key={error}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {!error && (
              <VLCPlayer
                source={{
                  uri: 'rtsp://192.168.178.85:8554/',
                }}
                paused={false}
                autoplay={true}
                resizeMode="fill"
                isLive={true}
                onError={(error: any) => {
                  setError(error);
                  Alert.alert('Something went wrong', error.type);
                  console.log(error);
                }}
                style={styles.player}
              />
            )}
            {error && (
              <TouchableOpacity
                style={{
                  color: 'blue',
                  width: '100%',
                  height: 50,
                  marginTop: 50,
                  padding: 50,
                }}
                hitSlop={{
                  top: 50,
                  left: 50,
                  bottom: 50,
                  right: 50,
                }}
                onBuffering={() => {
                  Alert.alert('Buffering', 'Ok');
                }}
                onPaused={() => {
                  Alert.alert('Paused', 'Ok');
                }}
                onStopped={() => {
                  Alert.alert('Stopped', 'Ok');
                }}
                onPressIn={() => {
                  console.log('hello');
                  setError(undefined);
                }}>
                <Text>Retry</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  player: {
    height: height,
    marginTop: 30,
  },
  scrollView: {
    backgroundColor: 'black',
    height: '100%',
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
