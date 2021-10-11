/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import PokemonList from '@kanto/pallet/src/Components/Molecules/PokemonList/PokemonList';
import usePokemonList from '@kanto/oak/src/hooks/usePokemonList';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { pokemons } = usePokemonList();

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>Hello But from TV!</Text>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default App;
