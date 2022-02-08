import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import Home from './src/pages/Home';

const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
});
