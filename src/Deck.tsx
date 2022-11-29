import { View } from "react-native";
import { IDeck } from "./types/Props.interface";

const Deck = ({ data, renderCard }: IDeck) => {
  return <View>{data.map(renderCard)}</View>;
};

export default Deck;
