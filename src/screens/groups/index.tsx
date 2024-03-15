import { Button } from "@components/button";
import { GroupCard } from "@components/groupCard";
import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Container, Content } from "./styles";

export function Groups() {
  return (
    <Container>
      <Content>
        <Header />
        <Highlight subtitle="jogue com sua turma" title="Turmas" />
        <GroupCard group={{ id: "1", name: "Teste" }} />
        <GroupCard group={{ id: "2", name: "Teste" }} />
      </Content>
      <Button title="Criar nova turma" type="PRIMARY" />
    </Container>
  );
}
