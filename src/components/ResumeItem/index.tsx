import * as C from "./styles";

interface Props {
  title: string;
  color?: string;
  value: number;
}

export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{value} €</C.Info>
    </C.Container>
  );
};
