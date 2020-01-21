import React, { Component } from 'react';
import ToggleButton from 'react-simple-switch';
import './index.css';

export default class App extends Component {
  state = {
    isCatAlive: 1,
    doesLikePizza: true,
    doesLikeReact: true
  };

  handleCat = isCatAlive => {
    this.setState({ isCatAlive });
  };

  getCatStat = isCatAlive => {
    const states = [
      { state: 'YES', color: 'green' },
      { state: 'NO', color: 'red' },
      { state: 'DEAD and ALIVE', color: 'blue' }
    ];
    return states[isCatAlive - 1];
  };

  handlePizza = doesLikePizza => {
    this.setState({ doesLikePizza });
  };

  handleReact = doesLikeReact => {
    this.setState({ doesLikeReact });
  };

  render() {
    const { isCatAlive, doesLikePizza, doesLikeReact } = this.state;
    return (
      <div style={{ margin: '20px' }}>
        <div className="toggle-container">
          <p>
            Is Schrodinger's cat alive ? &nbsp; &nbsp;
            <span
              style={{
                color: this.getCatStat(isCatAlive).color,
                fontSize: '20px'
              }}
            >
              {this.getCatStat(isCatAlive).state}
            </span>
          </p>
          <ToggleButton
            onChange={this.handleCat}
            initState={1}
            buttonDesign="angled"
            buttonStates={3}
            fontSize="12px"
            classNames={{ container: 'container', slider: 'slider' }}
            textData={{ stateOne: 'YES', stateTwo: 'NO', stateThree: 'BOTH' }}
            togglerWidth={40}
          />
        </div>
        <br></br>
        <div className="toggle-container">
          <p>
            Do you like pizza ? &nbsp; &nbsp;
            <span
              style={{
                fontSize: '20px',
                color: doesLikePizza ? 'green' : 'red'
              }}
            >
              {doesLikePizza ? 'YES' : 'NO'}
            </span>
          </p>
          <ToggleButton
            onChange={this.handlePizza}
            initState={true}
            buttonDesign="rounded"
            textData={{ stateOne: 'YES', stateTwo: 'NO' }}
            classNames={{ container: 'container', slider: 'slider' }}
          />
        </div>
        <br></br>
        <div className="toggle-container">
          <p>
            Do you like React ? &nbsp; &nbsp;
            <span
              style={{
                color: doesLikeReact ? 'green' : 'red',
                fontSize: '20px'
              }}
            >
              {doesLikeReact ? 'YES' : 'NO'}
            </span>
          </p>
          <ToggleButton
            onChange={this.handleReact}
            buttonDesign="angled"
            textData={{ stateOne: 'YES', stateTwo: 'NO' }}
            classNames={{ container: 'container', slider: 'slider' }}
            initState={false}
          />
        </div>
      </div>
    );
  }
}
