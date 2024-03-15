import { Dimensions } from "react-native";

const RELATIVE_SCREEN_HEIGHT = Dimensions.get("window").height;
const RELATIVE_SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = 926;
const SCREEN_WIDTH = 428;

export function calculatePercentageRelativeToFixedScreenHeight(height: number) {
  return (height * RELATIVE_SCREEN_HEIGHT) / SCREEN_HEIGHT;
}

export function calculatePercentageRelativeToFixedScreenWidth(width: number) {
  return (width * RELATIVE_SCREEN_WIDTH) / SCREEN_WIDTH;
}
