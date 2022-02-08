import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';

import AppBar from '../../components/AppBar';
import Banner from '../../components/Banner';
import BottomNavigationBar from '../../components/BottomNavigationBar';
import DivingCategories from '../../components/DivingCategories';
import Header from '../../components/Header';
import SearchBar from '../../components/Search';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Content */}
      <ScrollView>
        <View>
          <AppBar />
          <Header />
          <SearchBar />
          <DivingCategories />
          <Banner />

          {/* Spacer */}
          <View style={{height: 70}} />
        </View>
      </ScrollView>

      {/* Bottom navigation bar */}
      <BottomNavigationBar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
