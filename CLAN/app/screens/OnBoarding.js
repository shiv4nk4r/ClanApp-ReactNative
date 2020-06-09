import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  SafeAreaViewComponent,
  Platform,
  StatusBar,
  Button,
} from "react-native";

function OnBoarding(props) {
  return (
    <SafeAreaView style={styles.mainPage}>
      <StatusBar backgroundColor="#c0392b" />
      <Button title="Next"></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
    backgroundColor: "#e74c3c",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OnBoarding;
