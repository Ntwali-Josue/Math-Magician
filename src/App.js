import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitObj: {
        total: 0,
        next: 0,
        operation: null,
      },
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(obj) {
    this.setState({
      digitObj: obj,
    });
  }

  render() {
    const { digitObj } = this.state;
    return (
      <div className="App">
        <Calculator updateState={this.updateState} digitObj={digitObj} />
      </div>
    );
  }
}

export default App;
