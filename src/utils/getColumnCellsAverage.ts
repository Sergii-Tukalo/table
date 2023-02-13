import { fixedNumber } from './fixedNumber';
import { Cell } from './../types/cell';
export   const getColumnCellsAverage = (items: Cell[], numberCol: number, numberRow: number) => {
  const columnCellsSum = [];
  for (let i = 0; i < numberCol; i++) {
    let columnSum = 0;
    for (let j = i; j < items.length; j += Number(numberCol)) {
      columnSum += items[j].amount;
    } 
    columnCellsSum.push(fixedNumber((columnSum / numberRow), 1));
  }
  return columnCellsSum
};