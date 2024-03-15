import { Subtitle, Title } from "./styles";

type Props = {
  subtitle: string;
  title: string;
};

export function Highlight({ subtitle, title }: Props) {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
}
