import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeaderColumn width={100}>Date</C.TableHeaderColumn>
          <C.TableHeaderColumn width={130}>Category</C.TableHeaderColumn>
          <C.TableHeaderColumn>Title</C.TableHeaderColumn>
          <C.TableHeaderColumn width={150}>Value</C.TableHeaderColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, idx) => (
          <TableItem key={idx} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
