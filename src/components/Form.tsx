import React, { MouseEvent } from 'react';
import { useTableData } from '../context/Context';

export const Form = () => {
  const {
    setRowNumber,
    setColNumber,
    createItems,
    cellsAmount,
    items,
    setItems,
    setShowTable,
  } = useTableData();

  const getColNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setColNumber(Number(e.target.value));
  };
  const getRowNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setRowNumber(Number(e.target.value));
  };
  const submitColRow = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setItems(createItems(cellsAmount));
    setShowTable(true);
    return items;
  };

  return (
    <form
      className="form"
      action="#"
    >
      <label htmlFor="columns">
        Please enter how many columns should be in the table
      </label>
      <input
        className="form__input"
        type="number"
        name="columns"
        id="columns"
        min="1"
        max="100"
        required
        onChange={getColNumber}
      />
      <label htmlFor="rows">
        Please enter how many rows should be in the table
      </label>
      <input
        className="form__input"
        type="number"
        name="rows"
        id="rows"
        min="1"
        max="100"
        required
        onChange={getRowNumber}
      />
      <button
        onClick={submitColRow}
        type="submit"
      >
        submit
      </button>
    </form>
  );
};
