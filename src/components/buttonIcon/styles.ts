import { ThemeStyleProps } from "@constants/stylesConstants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { calculatePercentageRelativeToFixedScreenHeight } from "@utils/dimensions";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type IconStyleProps = {
  iconTheme: ThemeStyleProps;
};

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  height: ${calculatePercentageRelativeToFixedScreenHeight(56)}px;
  width: ${calculatePercentageRelativeToFixedScreenHeight(56)}px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs<IconStyleProps>(
  ({ theme, iconTheme }) => ({
    size: 24,
    color: iconTheme === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
