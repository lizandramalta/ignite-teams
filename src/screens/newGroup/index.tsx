import { Highlight } from "@components/highlight";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/button";
import { Input } from "@components/input";
import { Header } from "@components/header";

export function NewGroup() {
  return (
    <Container>
      <Header showGoBackButton />
      <Content>
        <Icon />
        <Highlight
          subtitle="crie uma turma para adicionar pessoas"
          title="Nova Turma"
        />
        <Input placeholder="Nome da turma" />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
