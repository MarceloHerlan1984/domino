import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";

export default function OrdersScreen() {
  return (
    <FlatList
      data={orders}
      contentContainerStyle={{ gap: 10 }}
      renderItem={({ item }) => <OrderListItem order={item} />}
    />
  );
}

const styles = StyleSheet.create({});
