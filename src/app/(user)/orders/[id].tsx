import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams();

  const order = orders.find((order) => order.id.toString() === id);

  if (!order) {
    return <Text> Not Found</Text>;
  }

  return (
    <View style={{ gap: 10, padding: 10 }}>
      <Stack.Screen options={{ title: `Order #${id}` }} />

      <FlatList
        ListHeaderComponent={() => <OrderListItem order={order} />}
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
