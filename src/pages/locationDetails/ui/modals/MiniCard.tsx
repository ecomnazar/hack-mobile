import { colors } from "@/shared/constants/colors";
import { Flex } from "@/shared/ui/Flex";
import React from "react";
import { Text, View, ViewStyle } from "react-native";

interface Props {
  title: string;
  value: string | number;
  style?: ViewStyle | ViewStyle[];
}

export const MiniCard: React.FC<Props> = ({ title, value, style }) => {
  return (
    <Flex
      enableSpaceBetween
      style={{
        borderWidth: 1,
        borderColor: colors.border100,
        backgroundColor: colors.white,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: colors.gray300, fontSize: 15, fontWeight: 600 }}>
        {title}
      </Text>
      <Text style={{ color: colors.gray300, fontSize: 14, fontWeight: 500 }}>
        {value}
      </Text>
    </Flex>
  );
};
