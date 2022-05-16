import React from "react";
import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { Items } from "./data/Items";
import { Categories } from "./data/Categories";
import { getCurrentMonth, filterListByMonth } from "./helpers/DateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InsertedArea } from "./components/InsertedArea";

function App(): JSX.Element {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currencyMonth, setCurrencyMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currencyMonth));
  }, [list, currencyMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let key in filteredList) {
      if (Categories[filteredList[key].category].expense)
        expenseCount += filteredList[key].value;
      else incomeCount += filteredList[key].value;
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrencyMonth(newMonth);
  };

  const onHandleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.MainTitle>Crypto FiN </C.MainTitle>
      </C.Header>
      <C.Body>
        {/* Information area  */}
        <InfoArea
          income={income}
          expense={expense}
          onMonthChange={handleMonthChange}
          currencyMonth={currencyMonth}
        />
        {/* insert area  */}
        <InsertedArea onAdd={onHandleAddItem} />
        {/* List information area  */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
