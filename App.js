import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/Navigations/TabNavigation';
import { useFonts } from 'expo-font';



const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};




export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });


  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SafeAreaView style={styles.container}>

        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
  },
});
