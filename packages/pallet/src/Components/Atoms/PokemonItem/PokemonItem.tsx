import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Colours, Images } from '../../../../assets';
import { PokeDexListItem } from '../../types';
import { BaseStyles } from '../BaseStyles';
import Type from '../Type/Type';
import Styles from './PokemonItem.styles';

interface Props {
  pokemon: PokeDexListItem;
  onPress(): void;
  style?: StyleProp<ViewStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
}

export default function PokemonItem(props: Props) {
  const titleType = `${props.pokemon.types[0]
    .charAt(0)
    .toUpperCase()}${props.pokemon.types[0].substring(1)}`;

  const backgroundColor = Colours[titleType];

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[props.touchableStyle, BaseStyles.shadow]}>
      <View style={[Styles.container, props.style, { backgroundColor }]}>
        <View style={Styles.column}>
          <Text style={[{ color: 'white' }, Styles.name, { marginBottom: 3 }]}>
            {props.pokemon.name}
          </Text>
          {props.pokemon.types.map((type: string, index: number) => (
            <Type key={index} type={type} index={index} />
          ))}
        </View>
        <View style={{ position: 'absolute', bottom: -10, right: -10 }}>
          <Image source={Images.Subtract} style={[Styles.lowerRightPokeball]} />
          <Image
            source={{ uri: props.pokemon.sprite }}
            style={Styles.image}
            resizeMode="stretch"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
