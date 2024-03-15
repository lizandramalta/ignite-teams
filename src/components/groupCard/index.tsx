import { Group } from "src/@types/group";
import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = {
  group: Group;
} & TouchableOpacityProps;

export function GroupCard({ group, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title> {group.name}</Title>
    </Container>
  );
}
