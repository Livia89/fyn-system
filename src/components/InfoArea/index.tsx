import { formaCurrentMonth } from "../../helpers/DateFilter";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styles";

const getCurrentDateObj = (currentMonth: string): Date => {
  let [year, month] = currentMonth.split("-");
  return new Date(parseInt(year), parseInt(month) - 1, 1);
};

interface Props {
  currencyMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({
  currencyMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
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
      <C.ResumeArea>
        <ResumeItem title="Income" value={income} />
        <ResumeItem title="Expense" value={expense} />
        <ResumeItem title="Balance" value={income - expense} />
      </C.ResumeArea>
    </C.Container>
  );
};
