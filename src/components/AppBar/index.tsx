import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {faBell, faHamburger} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faHamburger} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesomeIcon icon={faBell} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  icon: {color: '#406292'},
});
