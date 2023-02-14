import { useTableData } from '../context/Context';
import { Cell } from '../types/cell';
import { fixedNumber } from '../utils/fixedNumber';

type RowAmountCellProps = {
  cell: Cell;
  showPercent: boolean;
  rowSum: number;
};

export const RowAmountCell = ({
  cell,
  showPercent,
  rowSum,
}: RowAmountCellProps) => {
  const { increase, showCloseNumber, isIncludedCell } = useTableData();
  const percent = Math.floor(fixedNumber(cell.amount / rowSum, 2) * 100);

  const style = {
    background: showPercent
      ? `linear-gradient(0deg, rgba(0,0,255,1) ${percent}%, rgba(255,255,255,1) ${percent}%, rgba(255,255,255,1) 100%)`
      : '',
    cursor: 'pointer',
  };

  return (
    <td
      onClick={() => increase(cell.id)}
      style={style}
      onMouseEnter={() => showCloseNumber(cell)}
      className={isIncludedCell(cell.id) ? 'active' : ''}
    >
      {showPercent ? +percent + '%' : cell.amount}
    </td>
  );
};
