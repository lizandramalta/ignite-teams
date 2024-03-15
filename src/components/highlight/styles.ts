import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    align-self: center;
    color: ${theme.COLORS.WHITE};
    margin-bottom: 4px;
    margin-top: 32px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    align-self: center;
    color: ${theme.COLORS.GRAY_300};
    margin-bottom: 32px;
  `}
`;
