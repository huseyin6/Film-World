import React from 'react';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {WHITE_COLOR} from '../../styles';

const DEFAULT_ICON_SIZE = 20;

interface CustomIconProps {
  name: string;
  size?: number;
  color?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  size = DEFAULT_ICON_SIZE,
  color = WHITE_COLOR,
}) => {
  return <IconAntDesign name={name} size={size} color={color} />;
};

interface BackIconProps {
  size?: number;
  color?: string;
}

const BackIcon: React.FC<BackIconProps> = ({
  size = DEFAULT_ICON_SIZE,
  color = WHITE_COLOR,
}) => {
  return <CustomIcon name="left" size={size} color={color} />;
};

interface InfoIconProps {
  color?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({color = WHITE_COLOR}) => {
  return <CustomIcon name="infocirlceo" color={color} />;
};

interface SearchIconProps {
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({color = WHITE_COLOR}) => {
  return <CustomIcon name="search1" color={color} />;
};

export {BackIcon, InfoIcon, SearchIcon};
