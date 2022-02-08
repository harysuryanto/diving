import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <FontAwesomeIcon icon={faSearch} style={styles.icon} />
      <TextInput style={styles.textInput} placeholder="Search something here" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f4f7fc',
    alignItems: 'center',
  },
  icon: {color: '#406292'},
  textInput: {flex: 1, marginLeft: 10},
});
