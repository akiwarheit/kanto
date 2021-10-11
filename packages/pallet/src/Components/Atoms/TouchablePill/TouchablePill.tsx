import React from 'react';
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Colours, Images} from '../../../../assets';
import {BaseStyles} from '../BaseStyles';
import Styles from './TouchablePill.styles';

interface Props {
  text: string;
  onPress(): void;
  type:
    | 'grass'
    | 'fire'
    | 'water'
    | 'electric'
    | 'dark'
    | 'ground'
    | 'steel'
    | 'dragon';
  style?: StyleProp<ViewStyle>;
}

export default function TouchablePill(props: Props) {
  const titleType = `${props.type
    .charAt(0)
    .toUpperCase()}${props.type.substring(1)}`;

  const Colour = Colours[titleType];

  return (
    <TouchableOpacity onPress={props.onPress} style={BaseStyles.shadow}>
      <View
        style={[
          Styles.container,
          {
            backgroundColor: Colour,
          },
          props.style,
        ]}>
        <Image source={Images.Subtract} style={[Styles.upperLeftPokeball]} />
        <Image source={Images.Subtract} style={[Styles.lowerRightPokeball]} />
        <Text style={[{color: 'white'}, Styles.text]}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
