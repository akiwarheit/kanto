import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import PokemonList from '@kanto/pallet/src/Components/Molecules/PokemonList/PokemonList';
import usePokemonList from '@kanto/oak/src/hooks/usePokemonList';

function PokemonApp() {
  const isDarkMode = useColorScheme() === 'dark';

  const { pokemons, error } = usePokemonList();

  useEffect(() => {
    console.log('pokemons', pokemons.length);
  }, [pokemons]);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}

const App = () => {
  return <PokemonApp />;
};

export default App;
