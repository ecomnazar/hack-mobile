import React, { useCallback, useRef } from "react";
import { StyleSheet } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { colors } from "../constants/colors";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<Props> = ({ isOpen, onClose, children }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = () => onClose();

  React.useEffect(() => {
    if (isOpen) {
      handlePresentModalPress();
    }
  }, [isOpen]);
  //
  return (
    <>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor: colors.gray100,
          height: 6,
          width: 90,
          borderRadius: 5,
        }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.7}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            pressBehavior="close"
            enableTouchThrough={false}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></BottomSheetBackdrop>
        )}
      >
        <BottomSheetView style={[styles.contentContainer]}>
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingBottom: 25,
  },
});
