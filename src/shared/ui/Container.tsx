import React from "react";
import { getWindow } from "../constants/sizes";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  style?: ViewStyle | ViewStyle[];
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: getWindow("width"),
    paddingLeft: 16,
    paddingRight: 16,
  },
});
