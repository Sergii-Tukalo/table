import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Cell } from '../types/cell';
import { randomNumber } from '../utils/randomNumber';

export type TableContextType = {
  items: Cell[];
  rowNumber: number;
  colNumber: number;
  removeRow: (id: number) => void;
  addRow: () => void;
  increase: (id: number) => void;
  setRowNumber: Dispatch<SetStateAction<number>>;
  setColNumber: Dispatch<SetStateAction<number>>;
  cellsAmount: number;
  createItems: (count: number, newId?: number) => Cell[];
  setItems: Dispatch<SetStateAction<Cell[]>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
  showCloseNumber: Function;
  hideCloseNumber: Function;
  showTable: boolean;
  isIncludedCell: (id: number) => boolean;
};

const TableContext = createContext<TableContextType>({} as TableContextType);

export const TableContextProvider = ({ children }: { children: ReactNode }) => {
  let [rowNumber, setRowNumber] = useState<number>(5);
  let [colNumber, setColNumber] = useState<number>(5);
  let [showTable, setShowTable] = useState(false);

  let [hightLight, setHightLight] = useState<number[]>([]);

  const cellsAmount = Number(colNumber) * Number(rowNumber);

  const createItems = (count: number, newId = 1) =>
    Array.from({ length: count }, (_, i) => {
      return {
        id: i + newId,
        amount: randomNumber(),
      };
    });

  const showCloseNumber = (cell: Cell) => {
    const copy = items.filter((item) => item.id !== cell.id);
    const sortedCells = copy.sort((a, b) => {
      return (
        Math.abs(cell.amount - a.amount) - Math.abs(cell.amount - b.amount)
      );
    });
    const slicedIds = sortedCells.slice(0, 5).map((item) => item.id);
    setHightLight(slicedIds);
  };

  const isIncludedCell = (id: number) => {
    return hightLight.includes(id);
  };

  const [items, setItems] = useState<Cell[]>(createItems(cellsAmount));

  const removeRow = (id: number) => {
    const index = items.findIndex((item) => item.id === id);
    console.log(colNumber, rowNumber);

    setItems([
      ...items.slice(0, index),
      ...items.slice(index + Number(colNumber)),
    ]);
    setRowNumber((rowNumber -= 1));
  };

  const increase = (id: number) => {
    const index = items.findIndex((item) => item.id === id);
    let plusPoint = (items[index].amount += 1);

    const newItem = {
      id,
      amount: plusPoint,
    };

    setItems([...items.slice(0, index), newItem, ...items.slice(index + 1)]);
  };

  const addRow = () => {
    const lastItemsId = items[items.length - 1].id + 1;
    setItems([...items, ...createItems(colNumber, lastItemsId)]);
    console.log(colNumber, rowNumber);
    setRowNumber((rowNumber += 1));
    console.log(colNumber, rowNumber);
  };

  const value = {
    items,
    cellsAmount,
    rowNumber,
    colNumber,
    showTable,
    setShowTable,
    increase,
    createItems,
    setRowNumber,
    setColNumber,
    setItems,
    removeRow,
    addRow,
    showCloseNumber,
    isIncludedCell,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};

export const useTableData = () => useContext(TableContext);
