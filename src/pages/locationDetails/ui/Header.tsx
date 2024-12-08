import { colors } from "@/shared/constants/colors";
import { Flex } from "@/shared/ui/Flex";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Container } from "@/shared/ui/Container";

export const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Flex enableSpaceBetween>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.iconBackground}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color={colors.black90}
            style={{}}
          />
        </TouchableOpacity>
        <Text style={{ color: colors.black, fontSize: 18, fontWeight: 500 }}>
          Детали локации
        </Text>
        <View style={styles.iconBackground}>
          <Entypo name="dots-three-vertical" size={16} color={colors.black90} />
        </View>
      </Flex>
    </Container>
  );
};

const styles = StyleSheet.create({
  iconBackground: {
    backgroundColor: colors.gray,
    width: 40,
    height: 40,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
