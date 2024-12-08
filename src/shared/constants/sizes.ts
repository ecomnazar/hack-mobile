import { Dimensions } from "react-native";

export const getWindow = (type: "height" | "width") => {
  if (type === "width") {
    return Dimensions.get("screen").width;
  }
  return Dimensions.get("screen").height;
};

export const SCREEN_PADDING_TOP = 20;
