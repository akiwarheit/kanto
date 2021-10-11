import React from 'react';
import { Image, Text, View } from 'react-native';
import { PokeDexListItem } from '../../types';
import PokemonDossierStyles from './PokemonDossier.styles';

interface Props {
  pokemon: PokeDexListItem;
}

export default function PokemonDossier(props: Props) {
  return (
    <View style={PokemonDossierStyles.container}>
      <View>
        <View>
          <Text>{props.pokemon.name}</Text>
          <Text>#{props.pokemon.id}</Text>
        </View>
        <View>
          <Text />
        </View>
      </View>
      <View>
        <Image source={{ uri: props.pokemon.sprite }} />
      </View>
    </View>
  );
}
