import { toggleBottomSheet } from "@/entities/ui/modal/model/modalSlice";
import { colors } from "@/shared/constants/colors";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { BottomSheet } from "@/shared/ui/BottomSheet";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Text, View } from "react-native";
import { MiniCard } from "./MiniCard";
import { Card } from "./Card";
import { Image } from "expo-image";
import { images } from "@/shared/constants/images";

type TTreeStatus = "DELETED" | "WELL" | "WARNING";

interface ITree {
  name: string;
  location: string;
  imgUrl: string;
  species: string;
  age: number;
  lastWatered: string;
  wateringFreq: string;
  pestResistance: boolean;
  diseaseResistance: boolean;
  sunlight: string;
  temperature: string;
  humidity: string;
  lastHarvest: string;
  harvestQty: number;
  lastTreated: string;
  status: TTreeStatus;
}

export const TreeDetailsModal = () => {
  const dispatch = useAppDispatch();

  const { isOpen, type, data } = useAppSelector(
    (state) => state.modal.bottomSheet
  );

  const onClose = () => {
    dispatch(toggleBottomSheet({ modal: false, type, data }));
  };

  // @ts-ignore
  const tree: ITree = data || {};

  const open = isOpen && type === "treeDetails";

  return (
    <BottomSheet isOpen={open} onClose={onClose}>
      <Container style={{ marginTop: 10 }}>
        <View style={{ rowGap: 10 }}>
          <Card style={{}}>
            <Flex style={{ columnGap: 12 }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  backgroundColor: colors.gray,
                  borderRadius: 14,
                  overflow: "hidden",
                }}
              >
                <Image
                  source={images.qr}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={{ rowGap: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: colors.gray300,
                    flexWrap: "wrap",
                  }}
                >
                  Название:{"\n"}
                  <Text style={{ fontSize: 14, fontWeight: 500 }}>
                    {tree?.name}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: colors.gray300,
                  }}
                >
                  Локация: {"\n"}
                  <Text style={{ fontSize: 14, fontWeight: 500 }}>
                    {tree?.location}
                  </Text>
                </Text>
              </View>
            </Flex>
          </Card>
          <Card>
            <MiniCard title="Возраст дерева" value={tree?.age} />
            <MiniCard
              title="Частота полива"
              value={`раз в ${tree?.wateringFreq} дней`}
            />
            <MiniCard
              title="Устойчивость к вредителям"
              value={tree?.pestResistance ? "есть" : "нет"}
            />
            <MiniCard
              title="Устойчивость к болезням"
              value={tree?.diseaseResistance ? "есть" : "нет"}
            />
            <MiniCard
              title="Идеальная температура"
              value={`${tree.temperature}°C`}
            />
            <MiniCard title="Дата посл. полива" value={tree?.lastWatered} />
            <MiniCard title="Дата посл. урожая" value={tree?.lastHarvest} />
            <MiniCard
              title="Количество собранного ур."
              value={`${tree?.harvestQty}kg`}
            />
          </Card>
        </View>
      </Container>
    </BottomSheet>
  );
};
// location
//   name
//   imgUrl
//   species  // Тип дерева, например "Яблоня", "Дуб"
//   age     // Возраст дерева (в годах)
//   lastWatered   // Дата последнего полива
//   wateringFreq // Частота полива (например, раз в 7 дней)
//   pestResistance     // Устойчивость к вредителям
//   diseaseResistance  // Устойчивость к болезням
//   sunlight  // Требования к освещению (например, "Полное солнце", "Полутень")
//   temperature  // Идеальная температура (например, в градусах Цельсия)
//   humidity    // Идеальный уровень влажности
//   lastHarvest // Дата последнего сбора урожая
//   harvestQty  // Количество собранного урожая (например, в кг)
//   lastTreated // Дата последней обработки от болезней
//   status // Default status is 'WELL'

//   row    Int
// column Int
