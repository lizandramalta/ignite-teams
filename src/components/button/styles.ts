import { ThemeStyleProps } from "@constants/stylesConstants";
import { calculatePercentageRelativeToFixedScreenHeight } from "@utils/dimensions";
import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";

type Props = {
  active: boolean;
  buttonTheme: ThemeStyleProps;
};

function getBackground(
  active: boolean,
  buttonTheme: ThemeStyleProps,
  theme: DefaultTheme
) {
  if (buttonTheme === "PRIMARY" && !active) return theme.COLORS.GREEN_700;
  if (buttonTheme === "PRIMARY" && active) return theme.COLORS.GREEN_500;
  if (buttonTheme === "SECONDARY" && !active) return theme.COLORS.RED_DARK;
  return theme.COLORS.RED;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  border-radius: 6px;
  background-color: ${({ active, theme, buttonTheme }) =>
    getBackground(active, buttonTheme, theme)};
  align-items: center;
  justify-content: center;
  height: ${calculatePercentageRelativeToFixedScreenHeight(56)}px;
  margin-bottom: ${calculatePercentageRelativeToFixedScreenHeight(24)}px;
  min-height: 56px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;
