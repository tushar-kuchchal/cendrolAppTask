import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";

const Home = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onPressHandle = (item) => {
    navigation.navigate("details", { item });
  };
  if (productItem.isLoader) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (productItem.isError) {
    return <Text>Error</Text>;
  }
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPressHandle(item)}>
        <View style={styles.Container}>
          <View style={styles.itemContainer}>
            <View style={styles.txtContainer}>
              <Text style={styles.text}>{`Item--${item.title}`}</Text>
              <Text style={styles.text}>{`Price--$${item.price}`}</Text>
            </View>
            <View>
              <Image
                source={{ uri: item.thumbnail }}
                style={{ height: 70, width: 100 }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productItem.data.products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
  Container: {
    borderWidth: 1,
    height: 100,
    width: 350,
    marginBottom: 10,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtContainer: { width: 100, flex: 1 },
});

export default Home;
