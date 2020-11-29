import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { cityStyle } from '../styles';

const City = (props) => {
  return (
    <TouchableOpacity
      style={cityStyle.container}
      onPress={props.onSelect}
    >
      <Icon name="home-city-outline" size={19} color='#444'/>
      <Text style={cityStyle.text}>{props.city}</Text>
    </TouchableOpacity>
  );
};

export {City};
