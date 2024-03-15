import { ThemeStyleProps } from "@constants/stylesConstants";
import { useState } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  theme?: ThemeStyleProps;
};

export function Button({ title, theme = "PRIMARY", ...rest }: Props) {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <Container
      active={active}
      buttonTheme={theme}
      onPressIn={handleActive}
      onPressOut={handleActive}
      {...rest}
      activeOpacity={1}
    >
      <Title>{title}</Title>
    </Container>
  );
}
