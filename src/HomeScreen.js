import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  const takeToSettings = () => navigation.navigate("Settings");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <TouchableOpacity
        onPress={takeToSettings}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
};
