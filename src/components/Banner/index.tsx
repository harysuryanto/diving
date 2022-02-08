import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClock, faHeart, faMapMarker} from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const [isFavorite, setIsFavorite] = useState(true);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <ImageBackground
      borderRadius={20}
      source={require('../../../assets/illustrations/4.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* Opening count down */}
        <View style={styles.countDownContainer}>
          <FontAwesomeIcon icon={faClock} style={{marginRight: 10}} />
          <Text>Open in 24 mins</Text>
        </View>

        {/* Like */}
        <TouchableOpacity onPress={handleToggleFavorite}>
          <View style={styles.likeContainer}>
            <FontAwesomeIcon
              icon={faHeart}
              color={isFavorite ? 'red' : 'grey'}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        {/* Left */}
        <View>
          {/* Title */}
          <Text style={[styles.title, styles.lightTextColor]}>Nyelam Laut</Text>

          {/* Location */}
          <View style={styles.locationContainer}>
            <FontAwesomeIcon icon={faMapMarker} style={styles.lightTextColor} />
            <Text style={[styles.locationText, styles.lightTextColor]}>
              Pelabuhan Ratu
            </Text>
          </View>
        </View>

        {/* Right */}
        <View>
          <Text style={[styles.price, styles.lightTextColor]}>$120</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#1e477b',
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  countDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  likeContainer: {
    borderRadius: 20,
    height: 40,
    width: 40,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {fontSize: 20, fontWeight: 'bold'},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {marginLeft: 10},
  price: {fontSize: 24, fontWeight: 'bold'},
  lightTextColor: {color: '#fff'},
});
