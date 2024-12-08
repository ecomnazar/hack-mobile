import { colors } from "@/shared/constants/colors";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { ScrollView, Text, View } from "react-native";
import { LocationCard } from "./LocationCard";
import { images } from "@/shared/constants/images";

export const MainPage = () => {
  return (
    <ScrollView style={{ paddingBottom: 20 }}>
      <Container>
        <View style={{ paddingTop: 24 }}>
          <Flex style={{ marginBottom: 10 }} enableSpaceBetween>
            <Flex style={{ columnGap: 8 }}>
              <View
                style={{
                  backgroundColor: colors.primary,
                  width: 36,
                  height: 36,
                  borderRadius: 100,
                }}
              ></View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>Bagban</Text>
            </Flex>
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 100,
                backgroundColor: colors.gray,
              }}
            >
              {" "}
            </View>
          </Flex>
          <Text style={{ fontSize: 24 }}>
            Take care of your{"\n"}plants easily here!
          </Text>
        </View>

        <View style={{ marginTop: 30, rowGap: 20 }}>
          <LocationCard
            title="Yellow Mustard"
            description="Lorem ipsum dolor sit."
            imageUrl={images.location1}
            path=""
          />
          <LocationCard
            title="Yellow Mustard"
            description="Lorem ipsum dolor sit."
            imageUrl={images.location1}
            path=""
          />
          <LocationCard
            title="Yellow Mustard"
            description="Lorem ipsum dolor sit."
            imageUrl={images.location1}
            path=""
          />
        </View>
      </Container>
    </ScrollView>
  );
};
