import React, { Fragment } from 'react';
import { useTableData } from '../context/Context';
import { getColumnCellsAverage } from '../utils/getColumnCellsAverage';

export const RowAverage = () => {
  const { items, colNumber, rowNumber } = useTableData();
  return (
    <Fragment>
      {getColumnCellsAverage(items, colNumber, rowNumber).map(
        (itemAverage, index) => {
          return (
            <td
              style={{ background: 'grey' }}
              key={index}
            >
              {itemAverage}
            </td>
          );
        }
      )}
    </Fragment>
  );
};
