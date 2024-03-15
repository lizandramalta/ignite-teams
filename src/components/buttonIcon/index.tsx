import { ThemeStyleProps } from "@constants/stylesConstants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  iconTheme?: ThemeStyleProps;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
};

export function ButtonIcon({ iconTheme = "PRIMARY", name, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon iconTheme={iconTheme} name={name} />
    </Container>
  );
}
