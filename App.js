import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, Button } from "@rneui/themed";
import Deck from "./src/Deck";
import { DATA } from "./data";

export default function App() {
  const renderCard = (item) => (
    <Card>
      <Card.Title>{item.text}</Card.Title>
      <Image source={item.uri} style={styles.image} />
      <Button
        icon={{ name: "code" }}
        backgroundColor="#03A9F4"
        title="View now!"
      />
      <Text style={styles.text}>I don't know what to write here:)</Text>
    </Card>
  );

  const renderNoMoreCards = () => (
    <Card title="All Done!">
      <Text style={{ marginBottom: 10 }}>There's no more content!</Text>
      <Button backgroundColor="#03A9F4" title="Get more" />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        showCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});
