import { Cell } from "../types/cell";

export const getRowSum = (arr: Cell[]) => {
  return arr.reduce((acc, rowCell) => {
    return acc + rowCell.amount;
  }, 0);
};
