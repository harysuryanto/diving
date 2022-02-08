import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import ChipWithImage from '../ChipWithImage';

const DivingCategories = () => {
  const divingCategories = [
    {
      title: 'Day Diving',
      image: require('../../../assets/illustrations/1.jpg'),
    },
    {
      title: 'Night Diving',
      image: require('../../../assets/illustrations/7.jpg'),
    },
    {
      title: 'Morning Diving',
      image: require('../../../assets/illustrations/2.jpg'),
    },
    {
      title: 'Evening Diving',
      image: require('../../../assets/illustrations/6.jpg'),
    },
    {
      title: 'Midnight Diving',
      image: require('../../../assets/illustrations/5.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      <View style={styles.container}>
        {divingCategories.map(category => (
          <ChipWithImage
            text={category.title}
            imgSource={category.image}
            style={{marginHorizontal: 10}}
            key={category.title}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default DivingCategories;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginVertical: 20,
  },
  container: {paddingHorizontal: 10, flexDirection: 'row'},
});
