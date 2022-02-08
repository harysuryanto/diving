import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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

const SelectDivingFeaturesPage: React.FC<Props<'SelectDivingFeaturesPage'>> = ({
  navigation,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push('SelectDivingDatesPage')}>
        <Text>Go to SelectDivingDatesPage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectDivingFeaturesPage;

const styles = StyleSheet.create({});
