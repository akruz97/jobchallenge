/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { PaperProvider } from 'react-native-paper';
// import { API_URL } from '@env';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // console.log('API_URL:', API_URL); // Log the API_URL to verify it's being read correctly

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
