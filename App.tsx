import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Deck from "./src/Deck";
import { DATA } from "./data";
import { IData } from "./src/types/Props.interface";

export default function App() {
  const renderCard = (item: IData) => {
    return (
      <View key={item.id}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Deck data={DATA} renderCard={renderCard} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
