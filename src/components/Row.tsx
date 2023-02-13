import React, { useState } from 'react';
import { useTableData } from '../context/Context';
import { Cell } from '../types/cell';
import { getRowSum } from '../utils/getRowSum';
import { RowAmountCell } from './RowAmountCell';

type RowProps = {
  rowCells: Cell[];
  rowNumber: number;
};

export const Row = ({ rowCells, rowNumber }: RowProps) => {
  const { removeRow } = useTableData();
  const [show, setShow] = useState(false);
  const rowSum = getRowSum(rowCells);

  return (
    <tr>
      <td>Row №{rowNumber}</td>
      {rowCells.map((cell) => {
        return (
          <RowAmountCell
            rowSum={rowSum}
            showPercent={show}
            cell={cell}
            key={cell.id}
          />
        );
      })}
      <td
        style={{ background: 'grey' }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {rowSum}
      </td>
      <td>
        <button
          onClick={() => removeRow(rowCells[0].id)}
          type="button"
        >
          delete row
        </button>
      </td>
    </tr>
  );
};
