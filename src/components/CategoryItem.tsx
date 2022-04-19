import { Image, StyleSheet, Text, View } from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/images/hamburger.png")}
        />
      </View>
      <Text>Burger</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginHorizontal: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
});
