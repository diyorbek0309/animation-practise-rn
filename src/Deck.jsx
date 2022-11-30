import { View } from "react-native";

const Deck = ({ data, renderCard }) => {
  return <View>{data.map(renderCard)}</View>;
};

export default Deck;
