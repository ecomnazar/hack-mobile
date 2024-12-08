import { useLocalSearchParams, useRouter } from "expo-router";
import { SCREEN_PADDING_TOP } from "@/shared/constants/sizes";
import { ScrollView, Text, View } from "react-native";
import { colors } from "@/shared/constants/colors";
import { images } from "@/shared/constants/images";
import { Container } from "@/shared/ui/Container";
import { Header } from "./Header";
import { Image } from "expo-image";
import { Garden } from "./Garden";
import { TreeDetailsModal } from "./modals/TreeDetailsModal";

export const LocationDetailsPage = () => {
  const { id } = useLocalSearchParams();

  const imageUrl = images.location2;
  const title = "Бахерден";
  const subtitle = "Улица Ataturk, Дом 123, общая площадь 1200 кв/м";
  const description = "Плодородная почва с высоким содержанием минералов.";

  return (
    <>
      <ScrollView style={{ paddingTop: SCREEN_PADDING_TOP, paddingBottom: 20 }}>
        <Header />

        <View style={{ marginTop: 30 }}>
          <Container>
            <Image
              source={imageUrl}
              style={{ height: 225, borderRadius: 20 }}
            />
            <View style={{ marginTop: 15, rowGap: 4 }}>
              <Text
                style={{ color: colors.black, fontWeight: 600, fontSize: 17 }}
              >
                {title}
              </Text>
              <Text
                style={{ color: colors.black90, fontWeight: 500, fontSize: 13 }}
              >
                {subtitle}
              </Text>
            </View>
          </Container>
          <View
            style={{
              backgroundColor: colors.gray,
              height: 8,
              marginVertical: 24,
            }}
          ></View>
          <View>
            <Container>
              <View style={{ rowGap: 6 }}>
                <Text
                  style={{ color: colors.black, fontWeight: 600, fontSize: 15 }}
                >
                  Описание
                </Text>
                <Text
                  style={{
                    color: colors.black90,
                    fontWeight: 500,
                    fontSize: 12,
                  }}
                >
                  {description}
                </Text>
              </View>
            </Container>
          </View>
          <Garden />
        </View>
      </ScrollView>
      {/* MODALS */}

      <TreeDetailsModal />
    </>
  );
};
