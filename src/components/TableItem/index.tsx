import { formatDate } from "../../helpers/DateFilter";
import { Item } from "../../types/Item";
import * as C from "./styles";

import { Categories } from "../../data/Categories";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableItem>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={Categories[item.category].color}>
          {Categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={Categories[item.category].expense ? "red" : "green"}>
          {item.value.toFixed(2)}
        </C.Value>
      </C.TableColumn>
    </C.TableItem>
  );
};
