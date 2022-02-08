import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faMapMarked,
  faPersonBooth,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const BottomNavigationBar = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  function isActive(index: 0 | 1 | 2 | 3): string {
    return activePageIndex == index ? 'white' : '#9aa2e1';
  }

  const handleChangePage = (index: number) => {
    setActivePageIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* Home */}
      <TouchableOpacity
        onPress={() => handleChangePage(0)}
        style={styles.iconContainer}>
        <FontAwesomeIcon icon={faHome} color={isActive(0)} />
      </TouchableOpacity>

      {/* Search */}
      <TouchableOpacity
        onPress={() => handleChangePage(1)}
        style={styles.iconContainer}>
        <FontAwesomeIcon icon={faSearch} color={isActive(1)} />
      </TouchableOpacity>

      {/* Locations */}
      <TouchableOpacity
        onPress={() => handleChangePage(2)}
        style={styles.iconContainer}>
        <FontAwesomeIcon icon={faMapMarked} color={isActive(2)} />
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity
        onPress={() => handleChangePage(3)}
        style={styles.iconContainer}>
        <FontAwesomeIcon icon={faPersonBooth} color={isActive(3)} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigationBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#383e85',
    padding: 20,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
  },
  iconContainer: {flex: 1, alignItems: 'center'},
});
