import { Image, Pressable, StyleSheet } from "react-native";

import Colors from "@/src/constants/Colors";

import { Text, View } from "./Themed";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default/png";

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={{ padding: 10, flex: 1, maxWidth: "50%" }}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}asdsad</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
}
const styles = StyleSheet.create({
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
