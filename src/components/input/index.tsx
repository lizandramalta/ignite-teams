import { ButtonIcon } from "@components/buttonIcon";
import { ThemeStyleProps } from "@constants/stylesConstants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, InputContent, InputState } from "./styles";

type Props = TextInputProps & {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  iconAction?: () => void;
  iconTheme?: ThemeStyleProps;
};

export function Input({
  icon,
  iconAction,
  iconTheme = "PRIMARY",
  ...rest
}: Props) {
  const [state, setState] = useState<InputState>("DEFAULT");

  function handleFocus() {
    setState("ACTIVE");
  }

  function handleBlur() {
    setState((previousState) => {
      if (previousState !== "ERROR") return "DEFAULT";
      return previousState;
    });
  }

  return (
    <Container state={state}>
      <InputContent {...rest} onFocus={handleFocus} onBlur={handleBlur} />
      {!!icon && (
        <ButtonIcon iconTheme={iconTheme} name={icon} onPress={iconAction} />
      )}
    </Container>
  );
}
