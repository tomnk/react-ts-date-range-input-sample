import React, { Component } from 'react';
import { DateInput } from './date-range-input';
import { render } from 'react-dom';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>React date picker</h3>
        <div>
          <DateInput />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
