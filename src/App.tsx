import { View } from "react-native";
import CategoryItem from "./components/CategoryItem";
import Header from "./components/Header";
import Search from "./components/Search";

export const App = () => {
  return (
    <View>
      <Header />
      <Search />
      <CategoryItem />
    </View>
  );
};
