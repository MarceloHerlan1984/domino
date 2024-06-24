import { FlatList, FlatListComponent, Image, StyleSheet } from "react-native";

import EditScreenInfo from "../../../components/EditScreenInfo";
import { Text, View } from "../../../components/Themed";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "800",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
