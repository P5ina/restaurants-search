import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { elevation } from "../common/styles";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome
        name="search"
        size={25}
      />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, food"
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEndEditing}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 40,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
  elevation,
});
