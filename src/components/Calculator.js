import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  // constructor(props) {
  //   super(props);
  //   calculator = calculator.bind(this);
  //   this.returnSection = this.returnSection.bind(this);
  // }

  const [digitObj, setDigitObj] = useState({
    total: 0,
    next: 0,
    operation: null,
  });

  const updateState = (obj) => {
    setDigitObj(obj);
  };

  const calculator = (obj, button) => {
    // const { updateState } = this.props;
    const newObj = calculate(obj, button);
    updateState(newObj);
  };

  const returnSection = () => {
    // const { digitObj } = this.props;
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

  // render() {
  //   const { digitObj } = this.props;
  return (
    <section className="calculator">
      <h1>Math Magician</h1>
      <div className="return-section">{returnSection()}</div>
      <div className="digits-elts">
        <button type="button" className="button-section" value="AC" onClick={() => { calculator(digitObj, 'AC'); }}>AC</button>
        <button type="button" className="button-section" value="+/-" onClick={() => { calculator(digitObj, '+/-'); }}>+/-</button>
        <button type="button" className="button-section" value="%" onClick={() => { calculator(digitObj, '%'); }}>%</button>
        <button type="button" className="button-section operator" value="÷" onClick={() => { calculator(digitObj, '÷'); }}>÷</button>
        <button type="button" className="button-section" value="7" onClick={() => { calculator(digitObj, '7'); }}>7</button>
        <button type="button" className="button-section" value="8" onClick={() => { calculator(digitObj, '8'); }}>8</button>
        <button type="button" className="button-section" value="9" onClick={() => { calculator(digitObj, '9'); }}>9</button>
        <button type="button" className="button-section operator" value="x" onClick={() => { calculator(digitObj, 'x'); }}>x</button>
        <button type="button" className="button-section" value="4" onClick={() => { calculator(digitObj, '4'); }}>4</button>
        <button type="button" className="button-section" value="5" onClick={() => { calculator(digitObj, '5'); }}>5</button>
        <button type="button" className="button-section" value="6" onClick={() => { calculator(digitObj, '6'); }}>6</button>
        <button type="button" className="button-section operator" value="-" onClick={() => { calculator(digitObj, '-'); }}>-</button>
        <button type="button" className="button-section" value="1" onClick={() => { calculator(digitObj, '1'); }}>1</button>
        <button type="button" className="button-section" value="2" onClick={() => { calculator(digitObj, '2'); }}>2</button>
        <button type="button" className="button-section" value="3" onClick={() => { calculator(digitObj, '3'); }}>3</button>
        <button type="button" className="button-section operator" value="+" onClick={() => { calculator(digitObj, '+'); }}>+</button>
      </div>
      <span className="end">
        <button type="button" className="button-section" value="0" onClick={() => { calculator(digitObj, '0'); }}>0</button>
        <button type="button" className="button-section" value="." onClick={() => { calculator(digitObj, '.'); }}>.</button>
        <button type="button" className="button-section operator" value="=" onClick={() => { calculator(digitObj, '='); }}>=</button>
      </span>
    </section>
  );
  // }
};

// Calculator.propTypes = {
//   updateState: PropTypes.func.isRequired,
//   // eslint-disable-next-line react/forbid-prop-types
//   digitObj: PropTypes.object.isRequired,
// };

export default Calculator;
