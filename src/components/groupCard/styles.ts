import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { calculatePercentageRelativeToFixedScreenHeight } from "@utils/dimensions";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: ${calculatePercentageRelativeToFixedScreenHeight(96)}px;
  flex-direction: row;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
  margin-left: 20px;
`;
