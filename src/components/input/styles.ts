import { ThemeStyleProps } from "@constants/stylesConstants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { calculatePercentageRelativeToFixedScreenHeight } from "@utils/dimensions";
import { TextInput, TouchableOpacity } from "react-native";
import styled, { css, DefaultTheme } from "styled-components/native";

export type InputState = "ACTIVE" | "DEFAULT" | "ERROR";

type InputStyleProps = {
  state: InputState;
};

function getBorderColor(state: InputState, theme: DefaultTheme) {
  if (state === "ACTIVE") return theme.COLORS.GREEN_500;
  if (state === "ERROR") return theme.COLORS.RED;
  return theme.COLORS.GRAY_700;
}

export const Container = styled.View<InputStyleProps>`
  width: 100%;
  align-items: center;
  height: ${calculatePercentageRelativeToFixedScreenHeight(56)}px;
  min-height: 56px;
  border-radius: 6px;
  margin-top: -8px;
  margin-bottom: 20px;
  flex-direction: row;

  padding-left: 16px;
  ${({ state, theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border-color: ${getBorderColor(state, theme)};
  `};
  border-width: ${({ state }) => (state === "DEFAULT" ? 0 : 1)}px;
`;

export const InputContent = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
