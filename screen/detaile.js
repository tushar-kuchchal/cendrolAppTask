import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Detaile = ({ route }) => {
  // console.log('route',route.params.item)
  const {
    brand,
    category,
    description,
    discountPercentage,
    images,
    price,
    rating,
    title,
  } = route.params.item;

  return (
    <View style={styles.Container}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: images[0] }}
            style={{ height: 150, width: 100 }}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.text}>{`Price--$${price}`}</Text>
          <Text style={styles.text}>{`Rating--${rating}`}</Text>
          <Text
            style={styles.text}
          >{`DiscountPer--${discountPercentage}%`}</Text>
          <Text style={styles.text}>{`Brand--${brand}`}</Text>
          <Text style={styles.text}>{`Category--${category}`}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.text}>Description--</Text>
          </View>
          <View style={{ height: 250, width: 150 }}>
            <Text style={styles.text}>{description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: { fontSize: 20, fontWeight: "bold" },
  Container: { justifyContent: "center", alignItems: "center", flex: 1 },
  itemContainer: {
    borderWidth: 1,
    height: 700,
    width: 300,
    marginTop: 10,
    padding: 20,
  },
  imageContainer: { justifyContent: "center", alignItems: "center" },
  title: { textAlign: "center", paddingTop: 10, fontWeight: "bold" },
});

export default Detaile;
