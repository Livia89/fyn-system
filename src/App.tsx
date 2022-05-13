import React from "react";
import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { Items } from "./data/Items";
import { Categories } from "./data/Categories";
import { getCurrentMonth } from "./helpers/DateFilter";

const App = () => {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currencyMonth, setCurrencyMonth] = useState(getCurrentMonth());

  useEffect(() => {}, [list, currencyMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.MainTitle>Crypto FiN </C.MainTitle>
      </C.Header>
      <C.Body>
        {/* Information area  */}
        {/* insert area  */}
        {/* List information area  */}
      </C.Body>
    </C.Container>
  );
};

export default App;
