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
  const { increase } = useTableData();
  const percent = Math.floor(fixedNumber(cell.amount / rowSum, 2) * 100);

  const style = {
    background: showPercent
      ? `linear-gradient(0deg, rgba(255,0,0,1) ${percent}%, rgba(255,255,255,1) ${percent}%, rgba(255,255,255,1) 100%)`
      : 'transparent',
    cursor: 'pointer',
  };

  return (
    <td
      onClick={() => increase(cell.id)}
      style={style}
    >
      {showPercent ? +percent + '%' : cell.amount}
    </td>
  );
};
