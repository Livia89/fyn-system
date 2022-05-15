import * as C from "./styles";

interface Props {
  title: string;
  value: number;
}

export const ResumeItem = ({ title, value }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info>{value} €</C.Info>
    </C.Container>
  );
};
