import React, { FormEvent, MouseEvent } from 'react';
import { useTableData } from '../context/Context';

export const Form = () => {
  const {
    setRowNumber,
    setColNumber,
    createItems,
    cellsAmount,
    setItems,
    setShowTable,
    setXHightLight,
    showHightLightValidator,
    setShowHightLightValidator,
  } = useTableData();

  const getColNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 100) {
      setShowHightLightValidator(false);
      return setColNumber(Number(e.target.value));
    } else {
      return setShowHightLightValidator(true);
    }
  };

  const getRowNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 100) {
      setShowHightLightValidator(false);
      return setRowNumber(Number(e.target.value));
    } else {
      return setShowHightLightValidator(true);
    }
  };

  const getXNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > cellsAmount) {
      return setShowHightLightValidator(true);
    } else {
      setShowHightLightValidator(false);
      return setXHightLight(Number(e.target.value));
    }
  };

  const validationForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setItems(createItems(cellsAmount));
    setShowTable(true);
  };

  return (
    <form
      className="form"
      action="#"
      onSubmit={validationForm}
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
      <label htmlFor="x">Please enter X</label>
      <input
        className="form__input"
        type="number"
        id="x"
        min="1"
        max={cellsAmount}
        required
        onChange={getXNumber}
      />
      {showHightLightValidator ? (
        <span style={{ color: 'red' }}>some value is incorrect</span>
      ) : (
        ''
      )}
      <button type="submit">submit</button>
    </form>
  );
};
