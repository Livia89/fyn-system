import { formaCurrentMonth } from "../../helpers/DateFilter";
import * as C from "./styles";

interface Props {
  currencyMonth: string;
  onMonthChange: (newMonth: string) => void;
}

const getCurrentDateObj = (currentMonth: string): Date => {
  let [year, month] = currentMonth.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, 1);
};

export const InfoArea = ({ currencyMonth, onMonthChange }: Props) => {
  console.log(currencyMonth);

  const handlePrevMonth = () => {
    let currentDate = getCurrentDateObj(currencyMonth);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  const handleNextMonth = () => {
    let currentDate = getCurrentDateObj(currencyMonth);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formaCurrentMonth(currencyMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea></C.ResumeArea>
    </C.Container>
  );
};
