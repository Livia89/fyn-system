import * as C from "./styles";

interface Props {
  currencyMonth: string;
}
export const InfoArea = ({ currencyMonth }: Props) => {
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow>⬅️</C.MonthArrow>
        <C.MonthTitle>...</C.MonthTitle>
        <C.MonthArrow>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea></C.ResumeArea>
    </C.Container>
  );
};
