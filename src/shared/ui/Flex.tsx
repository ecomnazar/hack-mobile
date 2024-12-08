import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  enableSpaceBetween?: boolean;
}

export const Flex: React.FC<Props> = ({
  children,
  style,
  enableSpaceBetween,
}) => {
  return (
    <View
      style={[styles.flex, style, enableSpaceBetween && styles.spaceBetween]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
});
