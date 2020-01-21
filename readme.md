# react-simple-switch

> A customizable multi state toggle switch library for react

[![NPM](https://img.shields.io/npm/v/react-simple-switch.svg)](https://www.npmjs.com/package/react-simple-switch) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://react-multistate-toggler-demo.netlify.com/static/toggler-demo-3bba9d96c11ed083cf27739d4ebca848.gif" />

## Install

```bash
npm i react-simple-switch
```

## Documentation

Read the full Documentation [here](https://react-simple-switch-demo.netlify.com)

## Advantages

Create highly customizable toggle switches with ease. Create toggle switches with 3 states.

## Usage

### Basic usage

```jsx
import React, { Component } from 'react';
import ToggleButton from 'react-simple-switch';

export default class App extends Component {
  state = {
    toggleState: null
  };

  handleChange = toggleState => {
    this.setState({ toggleState });
  };

  render() {
    const { toggleState } = this.state;
    return (
      <div>
        <p>
          Do you like Pizzas:{' '}
          <span style={{ color: toggleState ? 'blue' : 'red' }}>
            {toggleState ? 'YES' : 'NO'}
          </span>
        </p>
        <ToggleButton
          onChange={this.handleChange}
          initState={true}
          buttonDesign="angled"
          textData={{ stateOne: 'YES', stateTwo: 'NO' }}
        />
      </div>
    );
  }
}
```

### Creating toggle button with 3 states

```jsx
import React, { Component } from "react";
import ToggleButton from "react-simple-switch";

export default class App extends Component {
  state = {
    toggleState: false
  };

  handleChange = toggleState => {
    this.setState({ toggleState });
  };

  getGender = () => {
    const { toggleState } = this.state;
    const genders = ['Female', 'Male', 'Other'];
    return genders[toggleState - 1];
  }

  render() {
    return (
      <div>
        <p>Choose your gender <span>{this.getGender()}</span></p>
        <ToggleButton
          onChange={this.handleChange}
          initState={true}
          buttonDesign='rounded'
          buttonStates={3}
          fontSize='12px'
          textData={ stateOne: 'M', stateTwo: 'F', stateThree: 'O' }
        />
      </div>
    );
  }
}
```

## License

MIT © [Manoj Bhat](https://github.com/Sigkill32)
