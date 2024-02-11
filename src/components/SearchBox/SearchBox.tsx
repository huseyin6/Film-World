import React from 'react';
import {View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import {SearchIcon} from '../Icons';
import styles from './SearchBox.styles';
import {BLACK_COLOR} from '../../styles';

interface SearchBoxProps extends TextInputProps {
  placeholderText?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onChangeText,
  onSubmitEditing,
  placeholderText = '',
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBox}
        placeholder={placeholderText}
        clearButtonMode="always"
        placeholderTextColor={BLACK_COLOR}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        {...rest}
      />
      <TouchableOpacity onPress={onSubmitEditing} style={styles.searchIcon}>
        <SearchIcon name="search" size={24} color={BLACK_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBox;
