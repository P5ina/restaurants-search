import { useState } from "react";
import { StatusBar, View } from "react-native";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Search from "./components/Search";

export const App = () => {
  const [term, setTerm] = useState("Burger");

  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />
      <Categories
        term={term}
        setTerm={setTerm}
      />
      <StatusBar />
    </View>
  );
};
