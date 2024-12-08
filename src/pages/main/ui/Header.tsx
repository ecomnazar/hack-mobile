import { Flex } from "@/shared/ui/Flex";
import { Text, View } from "react-native";
import { colors } from "@/shared/constants/colors";
import Entypo from "@expo/vector-icons/Entypo";

export const Header = () => {
  return (
    <View style={{ paddingTop: 24 }}>
      <Flex style={{ marginBottom: 10 }} enableSpaceBetween>
        <Flex style={{ columnGap: 8 }}>
          <View
            style={{
              backgroundColor: colors.primary,
              width: 36,
              height: 36,
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="leaf" size={18} color={colors.white} />
          </View>
          <Text style={{ fontWeight: 600, fontSize: 17 }}>Bagban</Text>
        </Flex>
      </Flex>
      <Text style={{ fontSize: 26 }}>
        Ваш урожай - наша забота:{"\n"}от посадки до продаж
      </Text>
    </View>
  );
};
