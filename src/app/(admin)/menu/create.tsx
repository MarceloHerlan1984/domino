import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import Button from "@/src/components/Button";
import { defaultPizzaImage } from "@/src/components/ProductListItem";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const { id } = useLocalSearchParams();

  const isUpdating = !!id;

  const resetFields = () => {
    setName("");
    setPrice("");
    setErrors("");
  };

  const onSubmit = () => {
    if (isUpdating) {
      onUpdate();
    } else {
      onCreate();
    }
  };

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }

    console.warn("creating product: ", name);

    resetFields();
  };

  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }

    console.warn("updating product: ", name);

    resetFields();
  };

  const onDelete = () => {
    console.warn("deleting");
  };

  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure?", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  const validateInput = () => {
    if (!name || !price) {
      setErrors("fill all required fields");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("price must be a number");
      return false;
    }

    return true;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: isUpdating ? "Update product" : "Create Product" }}
      />
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>
      <TextInput
        placeholder="name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />
      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onSubmit} text={isUpdating ? "update" : "create"} />
      {isUpdating ? <Button onPress={confirmDelete} text="Delete" /> : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "600",
    color: "gray",
    marginVertical: 20,
  },
  image: {
    resizeMode: "cover",
    height: 200,
    aspectRatio: 1,
    backgroundColor: "orange",
    borderRadius: 100,

    alignSelf: "center",
  },
});
