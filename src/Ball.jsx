import { useEffect } from "react";
import { View, Animated } from "react-native";

const Ball = () => {
  const pos = new Animated.ValueXY(0, 0);
  useEffect(() => {
    Animated.spring(pos, {
      toValue: { x: 200, y: 500 },
    }).start();
  }, []);

  return <View style={styles.ball} />;
};

export default Ball;

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
};
