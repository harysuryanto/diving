import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

export type ChipWithImageStyle = StyleProp<ViewStyle>;

const ChipWithImage = ({
  imgSource,
  text,
  style,
}: {
  imgSource?: any;
  text: string;
  style?: ChipWithImageStyle;
}) => {
  return (
    <View style={[styles.chipContainer, style]}>
      <Image source={imgSource} style={styles.chipImage} />
      <Text style={styles.chipText}>{text}</Text>
    </View>
  );
};

export default ChipWithImage;

const styles = StyleSheet.create({
  chipContainer: {
    padding: 5,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f1fe',
  },
  chipImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#91ccf8',
  },
  chipText: {
    marginHorizontal: 15,
  },
});
