import styled from "styled-components";

export const TableItem = styled.tr``;

export const TableColumn = styled.td`
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;