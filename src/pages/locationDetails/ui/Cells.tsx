import { colors } from "@/shared/constants/colors";
import { Flex } from "@/shared/ui/Flex";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { toggleBottomSheet } from "@/entities/ui/modal/model/modalSlice";

const filledGradient: [string, string, ...string[]] = [
  "#92B246",
  "#749D41",
  "#5A893F",
];
const redGradient: [string, string, ...string[]] = [
  "#DA3E38",
  "#A73627",
  "#DA3E38",
];

export const Cells = () => {
  const dispatch = useAppDispatch();

  const renderGrape = () => (
    <MaterialCommunityIcons
      name="fruit-grapes"
      size={22}
      color={colors.white}
    />
  );

  const renderCherrie = () => (
    <MaterialCommunityIcons
      name="fruit-cherries"
      size={22}
      color={colors.white}
    />
  );

  const handleSelect = () => {
    const data = {
      age: 2,
      diseaseResistance: true,
      harvestQty: 10,
      humidity: "High",
      imgUrl: "https://example.com/image.jpg",
      lastHarvest: "2021-09-09",
      lastTreated: "2021-09-09",
      lastWatered: "2021-09-09",
      name: "Яблочное дерево",
      location: "Ashgabat, Buzmeyin",
      pestResistance: true,
      species: "Apple",
      status: "WELL",
      sunlight: "Full sun",
      temperature: "25",
      wateringFreq: "3",
    };
    dispatch(toggleBottomSheet({ modal: true, type: "treeDetails", data }));
  };

  return (
    <View>
      <View style={{ rowGap: 7 }}>
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <Flex enableSpaceBetween>
              {Array.from({ length: 7 }).map((_, index) => {
                const randomNumber = Math.floor(Math.random() * 2);
                const secondRandomNumber = Math.floor(Math.random() * 2);
                const thirdRandomNumber = Math.floor(Math.random() * 10);
                const isDead =
                  thirdRandomNumber === 2 || thirdRandomNumber === 5;
                const isFilled = randomNumber % 2 === 0 && !isDead;
                return (
                  <TouchableOpacity
                    onPress={() => handleSelect()}
                    activeOpacity={1}
                    key={index}
                    style={{
                      width: "12%",
                      height: 40,
                      backgroundColor: colors.gray100,
                      borderRadius: 10,
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {(isFilled || isDead) && (
                      <LinearGradient
                        colors={isFilled ? filledGradient : redGradient}
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    )}
                    {!isFilled && !isDead && (
                      <FontAwesome6
                        name="plus"
                        size={20}
                        color={colors.primary20}
                      />
                    )}
                    {isDead && (
                      <FontAwesome5
                        name="book-dead"
                        size={18}
                        color={colors.white}
                      />
                    )}
                    {isFilled && !isDead && (
                      <View style={{ transform: [{ rotate: "30deg" }] }}>
                        {secondRandomNumber % 2 === 0
                          ? renderGrape()
                          : renderCherrie()}
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </Flex>
          );
        })}
      </View>
    </View>
  );
};
