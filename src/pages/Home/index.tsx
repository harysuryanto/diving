import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import AppBar from '../../components/AppBar';
import Banner from '../../components/Banner';
import BottomNavigationBar from '../../components/BottomNavigationBar';
import DivingCategories from '../../components/DivingCategories';
import Header from '../../components/Header';
import SearchBar from '../../components/Search';
import {RootStackParamList} from '../../../App';

type ScreenNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

const HomePage: React.FC<Props<'HomePage'>> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Content */}
      <ScrollView>
        <View>
          <AppBar />
          <Header />
          <SearchBar />
          <DivingCategories />
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectDivingFeaturesPage')}>
            <Banner />
          </TouchableOpacity>

          {/* Spacer */}
          <View style={{height: 70}} />
        </View>
      </ScrollView>

      {/* Bottom navigation bar */}
      <BottomNavigationBar />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
