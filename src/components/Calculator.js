import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.calculator = this.calculator.bind(this);
    this.returnSection = this.returnSection.bind(this);
  }

  returnSection = () => {
    const { digitObj } = this.props;
    const { total, next, operation } = digitObj;

    if (total === null && next === null) {
      return 0;
    }
    if (next !== null && total === null) {
      return next;
    }
    if (total !== null && next !== null) {
      if (operation !== null && operation !== null) {
        return `${total} ${operation} ${next}`;
      }
      return total;
    }
    return total;
  }

  render() {
    return (
      <section className="calculator">
        <h1>Math Magician</h1>
        <div className="return-section">{this.returnSection()}</div>
        <div className="digits-elts">
          <button type="button" className="button-section">{this.handleCalculator(t, 'AC')}</button>
          <button type="button" className="button-section">+/-</button>
          <button type="button" className="button-section">%</button>
          <button type="button" className="button-section operator">+</button>
          <button type="button" className="button-section">7</button>
          <button type="button" className="button-section">8</button>
          <button type="button" className="button-section">9</button>
          <button type="button" className="button-section operator">x</button>
          <button type="button" className="button-section">4</button>
          <button type="button" className="button-section">5</button>
          <button type="button" className="button-section">6</button>
          <button type="button" className="button-section operator">-</button>
          <button type="button" className="button-section">1</button>
          <button type="button" className="button-section">2</button>
          <button type="button" className="button-section">3</button>
          <button type="button" className="button-section operator">+</button>
        </div>
        <span className="end">
          <button type="button" className="button-section">0</button>
          <button type="button" className="button-section">.</button>
          <button type="button" className="button-section operator">=</button>
        </span>
      </section>
    );
  }
}


export default Calculator;
