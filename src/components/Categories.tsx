import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const commonCategories = [
  {
    name: "Burger",
    imageUrl: require("../assets/images/hamburger.png"),
  },
  {
    name: "Pizza",
    imageUrl: require("../assets/images/pizza.png"),
  },
  {
    name: "Desserts",
    imageUrl: require("../assets/images/shortcake.png"),
  },
  {
    name: "Drinks",
    imageUrl: require("../assets/images/cup-with-straw.png"),
  },
  {
    name: "Pasta",
    imageUrl: require("../assets/images/spaghetti.png"),
  },
  {
    name: "Steak",
    imageUrl: require("../assets/images/cut-of-meat.png"),
  },
];

export default function Categories({ term, setTerm }) {
  return (
    <FlatList
      data={commonCategories}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            onPress={() => setTerm(item.name)}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
    />
  );
}
