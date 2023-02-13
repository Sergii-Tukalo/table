import { useTableData } from '../context/Context';
import { Form } from './Form';
import { Row } from './Row';
import { RowAverage } from './RowAverage';

export const Layout = () => {
  const { items, rowNumber, colNumber, addRow, showTable } = useTableData();

  let colNumberArr = Array.from({ length: colNumber }, (_, i) => {
    return i + 1;
  });
  let rowNumberArr = Array.from({ length: rowNumber }, (_, i) => {
    return i + 1;
  });

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            {colNumberArr.map((item) => {
              return <th key={item}>Col №{item}</th>;
            })}
            <th>Sum values</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rowNumberArr.map((rowNumber, index) => {
            const slicedItems = items.slice(
              colNumber * index,
              colNumber * rowNumber
            );
            return (
              <Row
                rowNumber={rowNumber}
                rowCells={slicedItems}
                key={rowNumber}
              />
            );
          })}
          <tr>
            <td>Average values</td>
            <RowAverage />
            <td colSpan={2}>
              <button
                type="button"
                onClick={() => addRow()}
              >
                add row
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return <div className="App">{!showTable ? <Form /> : <Table />}</div>;
};
