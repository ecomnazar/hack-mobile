import { colors } from "@/shared/constants/colors";
import React from "react";
import { View, ViewStyle } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export const Card: React.FC<Props> = ({ children, style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.gray200,
          borderWidth: 1,
          borderColor: colors.border100,
          padding: 10,
          borderRadius: 16,
          rowGap: 10,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};
