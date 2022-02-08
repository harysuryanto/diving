import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>You want</Text>
      <Text style={styles.headerText}>to diving?</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 30,
    color: '#292f57',
    // fontWeight: '600',
  },
});
