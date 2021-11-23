import React from 'react';

class Caculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Caculator</h1>
        <div>
          <div className="return-section">0</div>
          <div className="digits-btns">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn operator">+</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn operator">x</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn operator">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn operator">+</button>
          </div>
          <span className="end">
            <button type="button" className="btn">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn operator">=</button>
          </span>
        </div>

      </>
    );
  }
}

export default Caculator;
