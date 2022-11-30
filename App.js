import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./src/Deck";
import { DATA } from "./data";

export default function App() {
  const renderCard = (item) => (
    <Card
      key={item.id}
      title={item.text}
      image={require("./assets/image1.jpg")}
    >
      <Button
        icon={{ name: "code" }}
        backgroundColor="#03A9F4"
        title="View now!"
      />
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
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
