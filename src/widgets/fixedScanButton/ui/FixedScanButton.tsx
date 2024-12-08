import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity, View } from "react-native";
import { colors } from "@/shared/constants/colors";
import { useRouter } from "expo-router";

export const FixedScanButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/scan")}
      activeOpacity={1}
      style={{
        position: "absolute",
        bottom: 10,
        left: "50%",
        transform: [{ translateX: "-50%" }],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        backgroundColor: colors.primary,
        borderRadius: 20,
      }}
    >
      <AntDesign name="scan1" size={34} color="white" />
    </TouchableOpacity>
  );
};
