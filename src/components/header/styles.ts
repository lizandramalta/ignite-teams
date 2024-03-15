import theme from "@theme/index";
import { CaretLeft } from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

type StyleProps = {
  goBackButtonIsVisible: boolean;
};

export const Container = styled(View)<StyleProps>`
  width: "100%";
  flex-direction: row;
  align-items: center;
  justify-content: ${({ goBackButtonIsVisible }) =>
    goBackButtonIsVisible ? "space-between" : "center"};
`;

export const Logo = styled.Image`
  width: 46px;
  height: 56px;
`;

export const GoBackButton = styled(TouchableOpacity)``;

export const GoBackIcon = styled(CaretLeft).attrs(({}) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
