import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomePage from './src/pages/Home';
import SelectDivingFeaturesPage from './src/pages/SelectDivingFeatures';
import SelectDivingDatesPage from './src/pages/SelectDivingDates';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomePage: undefined;
  SelectDivingFeaturesPage: undefined;
  SelectDivingDatesPage: undefined;
};

const App: React.FC<RootStackParamList> = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={screenOptions}
          />
          <Stack.Screen
            name="SelectDivingFeaturesPage"
            component={SelectDivingFeaturesPage}
            options={screenOptions}
          />
          <Stack.Screen
            name="SelectDivingDatesPage"
            component={SelectDivingDatesPage}
            options={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  statusBarStyle: 'dark',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
