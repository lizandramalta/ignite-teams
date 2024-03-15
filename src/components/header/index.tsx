import logo from "@assets/logo.png";
import { TouchableOpacity } from "react-native";
import { Container, GoBackIcon, Logo } from "./styles";

type HeaderProps = {
  showGoBackButton?: boolean;
};

export function Header({ showGoBackButton = false }: HeaderProps) {
  return (
    <Container goBackButtonIsVisible={showGoBackButton}>
      {showGoBackButton && (
        <TouchableOpacity>
          <GoBackIcon />
        </TouchableOpacity>
      )}
      <Logo source={logo} />
    </Container>
  );
}
