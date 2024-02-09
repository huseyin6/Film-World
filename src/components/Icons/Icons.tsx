import React, {Component} from 'react';
import {Platform, View, Text} from 'react-native';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

IconAntDesign.loadFont();

export const BackIcon = props => {
  return (
    <IconAntDesign
      name="left"
      size={props.size || 20}
      color={props.color || '#fff'}
    />
  );
};

export const InfoIcon = props => {
  return (
    <IconAntDesign name="infocirlceo" size={20} color={props.color || '#fff'} />
  );
};
