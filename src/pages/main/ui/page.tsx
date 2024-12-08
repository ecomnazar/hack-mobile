import { Container } from "@/shared/ui/Container";
import { ScrollView, View } from "react-native";
import { LocationCard } from "./LocationCard";
import { images } from "@/shared/constants/images";
import { SCREEN_PADDING_TOP } from "@/shared/constants/sizes";
import { Header } from "./Header";
import { FixedScanButton } from "@/widgets/fixedScanButton";

export const MainPage = () => {
  return (
    <>
      <ScrollView style={{ paddingBottom: SCREEN_PADDING_TOP, flex: 1 }}>
        <Container>
          <Header />

          <View style={{ marginTop: 30, rowGap: 20, paddingBottom: 100 }}>
            <LocationCard
              title="Бахерден"
              description="Улица Ataturk, Дом 123, общая площадь 1200 кв/м"
              imageUrl={images.location1}
              id={1}
            />
            <LocationCard
              title="Аннау"
              description="Улица Jemagat, Дом 330, общая площадь 1330 кв/м"
              imageUrl={images.location2}
              id={2}
            />
            <LocationCard
              title="Безмейин"
              description="Улица Asudalyk, Jay 771, общая площадь 7770 кв/м"
              imageUrl={images.location1}
              id={3}
            />
          </View>
        </Container>
      </ScrollView>
      <FixedScanButton />
    </>
  );
};
