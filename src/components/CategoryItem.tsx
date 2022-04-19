import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { elevation } from "../common/styles";

export interface CategoryItemProps {
  name: string;
  imageUrl: ImageSourcePropType;
  active: boolean;
  index?: number;
  onPress: (event: GestureResponderEvent) => void;
}

export default function CategoryItem(props: CategoryItemProps) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          props.index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          props.active
            ? { backgroundColor: "#FFB800" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={props.imageUrl}
          />
        </View>
        <Text style={styles.itemName}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
