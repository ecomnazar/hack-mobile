import React from "react";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/shared/constants/colors";
import { useRouter } from "expo-router";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
}

export const LocationCard: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  id,
}) => {
  const router = useRouter();
  return (
    <View
      style={{
        position: "relative",
        height: 275,
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <Image source={imageUrl} style={{ width: "100%", height: "100%" }} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => router.push(`/location/${id}`)}
        style={{
          backgroundColor: colors.white,
          width: 100,
          height: 100,
          borderTopLeftRadius: 20,
          position: "absolute",
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          zIndex: 2,
        }}
      >
        <View
          style={{
            height: 86,
            width: 86,
            borderRadius: 20,
            backgroundColor: colors.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={34}
            color={colors.white}
            style={{ transform: [{ rotate: "135deg" }] }}
          />
        </View>
      </TouchableOpacity>

      <View
        style={{
          height: 100,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "70%",
          paddingHorizontal: 10,
          paddingVertical: 16,
          zIndex: 2,
          rowGap: 10,
        }}
      >
        <Text style={{ color: colors.white, fontSize: 21 }}>{title}</Text>
        <Text style={{ color: colors.white, fontSize: 12 }}>{description}</Text>
      </View>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.7)"]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};
