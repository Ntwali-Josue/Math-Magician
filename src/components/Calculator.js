import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [digitObj, setDigitObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const updateState = (obj) => {
    setDigitObj(obj);
  };

  const calculator = (obj, button) => {
    const newObj = calculate(obj, button);
    updateState(newObj);
  };

  const returnSection = () => {
    const { total, next, operation } = digitObj;

    if (total === null && next === null) {
      return 0;
    }
    if (next !== null && total === null) {
      return next;
    }
    if (total !== null && next !== null) {
      if (operation !== null && operation !== undefined) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  };

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+'].map((btn) => (
    (btn === 'x' || btn === '+' || btn === '-' || btn === '÷') ? (
      <button
        type="button"
        className="button-section operator"
        value={btn}
        key={btn}
        onClick={() => calculator(digitObj, btn)}
      >
        {btn}
      </button>
    ) : (
      <button
        type="button"
        className="button-section"
        value={btn}
        key={btn}
        onClick={() => calculator(digitObj, btn)}
      >
        {btn}
      </button>
    )
  ));

  return (
    <section className="calculator">
      <h1>Math Magician</h1>
      <div className="return-section">{returnSection()}</div>
      <div className="digits-elts">
        {buttons}
      </div>
      <span className="end">
        <button type="button" className="button-section" value="0" onClick={() => { calculator(digitObj, '0'); }}>0</button>
        <button type="button" className="button-section" value="." onClick={() => { calculator(digitObj, '.'); }}>.</button>
        <button type="button" className="button-section operator" value="=" onClick={() => { calculator(digitObj, '='); }}>=</button>
      </span>
    </section>
  );
};

export default Calculator;
