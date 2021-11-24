import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import calculate from './logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.calculator = this.calculator.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Calculator digitObj={this.digitObj} />
      </div>
    );
  }
}

export default App;
