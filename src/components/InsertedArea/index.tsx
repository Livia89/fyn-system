import { useState } from "react";
import { Categories } from "../../data/Categories";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

export const InsertedArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");

  const handleAddEvent = () => {
    /*  let newItem: Item = {};
  onAdd(newItem); */
  };
  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Date</C.InputTitle>
        <C.Input type="date" />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Category</C.InputTitle>
        <C.Select>
          <>
            <option></option>
            {Object.keys(Categories).map((category, idx) => (
              <option key={idx} value={category}>
                {Categories[category].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Title</C.InputTitle>
        <C.Input />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>value</C.InputTitle>
        <C.Input />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Add</C.Button>
      </C.InputLabel>
    </C.Container>
  );
};
