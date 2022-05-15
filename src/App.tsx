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

function App(): JSX.Element {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currencyMonth, setCurrencyMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currencyMonth));
  }, [list, currencyMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrencyMonth(newMonth);
  };
  return (
    <C.Container>
      <C.Header>
        <C.MainTitle>Crypto FiN </C.MainTitle>
      </C.Header>
      <C.Body>
        {/* Information area  */}
        <InfoArea
          onMonthChange={handleMonthChange}
          currencyMonth={currencyMonth}
        />
        {/* insert area  */}
        {/* List information area  */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
