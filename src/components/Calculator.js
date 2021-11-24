import React from 'react';
import './Caculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator">
        <h1>Math Magician</h1>
        <div className="return-section">0</div>
        <div className="digits-elts">
          <button type="button" className="button-section">AC</button>
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
