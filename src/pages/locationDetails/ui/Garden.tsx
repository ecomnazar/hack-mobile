import React from "react";
import { colors } from "@/shared/constants/colors";
import { Container } from "@/shared/ui/Container";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Flex } from "@/shared/ui/Flex";
import { Cells } from "./Cells";

export const Garden = () => {
  const [activeGardenIndex, setActiveGardenIndex] = React.useState(1);

  return (
    <View style={{ marginTop: 20, paddingBottom: 50 }}>
      <Container>
        <Text style={{ color: colors.black, fontWeight: 600, fontSize: 15 }}>
          Сад
        </Text>

        <Flex
          style={{ columnGap: 40, justifyContent: "center", marginTop: 20 }}
        >
          <TouchableOpacity
            onPress={() =>
              setActiveGardenIndex((prev) => (prev === 1 ? 1 : prev - 1))
            }
            style={{
              backgroundColor: colors.primary20,
              width: 30,
              height: 30,
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="chevron-thin-left" size={13} color={colors.primary} />
          </TouchableOpacity>
          <Text style={{ color: colors.black, fontSize: 16, fontWeight: 600 }}>
            Сад #{activeGardenIndex}
          </Text>
          <TouchableOpacity
            onPress={() => setActiveGardenIndex((prev) => prev + 1)}
            style={{
              backgroundColor: colors.primary20,
              width: 30,
              height: 30,
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: [{ rotate: "180deg" }],
            }}
          >
            <Entypo name="chevron-thin-left" size={13} color={colors.primary} />
          </TouchableOpacity>
        </Flex>

        <Flex enableSpaceBetween style={{ marginTop: 20, marginBottom: 15 }}>
          {Array.from({ length: 7 }).map((_, index) => {
            return (
              <View style={{ width: "12%" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                    color: colors.black,
                    fontSize: 17,
                  }}
                >
                  {index + 1 + (activeGardenIndex - 1) * 7}
                </Text>
              </View>
            );
          })}
        </Flex>

        <Cells />
      </Container>
    </View>
  );
};
