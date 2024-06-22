import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.login}>
        Login with Google
      </Text>
    </TouchableOpacity>
  );
}
export default SignInWithOAuth;

const styles = StyleSheet.create({
  button:{
      padding:15,
      backgroundColor:Colors.white,
      borderRadius:99,
      marginTop:50
  },
  login:{
      textAlign:'center',
      fontSize:20,
      color:Colors.primary,
  }
})