import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">(
    "lightgray"
  );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Talk GPT</Text>
      <Text style={styles.instructions}>
        Press and hold the button to record your voice. Release it when you are
        done.
      </Text>
      <Text style={styles.message}>Your message:</Text>
      <TouchableOpacity
        onPressIn={() => setBorderColor("lightgreen")}
        onPressOut={() => setBorderColor("lightgray")}
        style={[styles.speakButton, { borderColor: borderColor }]}
        onPress={() => {}}
      >
        <Text>Hold to Speak</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text>Replay Last Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#343541",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#ececf1",
  },
  instructions: {
    textAlign: "center",
    color: "#ececf1",
    fontSize: 16,
  },
  message: {
    fontSize: 22,
    color: "#ececf1",
  },
  speakButton: {
    padding: 30,
    gap: 10,
    borderWidth: 3,
    alignItems: "center",
    borderRadius: 10,
  },
});
