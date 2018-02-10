import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Style from './styles/style';
import InputButton from './components/inputButton';
import ClearButton from './components/clearButton'

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      prevInputValue: 0,
      inputValue: 0,
      selectedSymbol: null
    }
  }

  render() {
    return (
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>

        <View style={Style.clearButtonContainer}>
          <ClearButton onPress={this._onClearButtonPressed().bind(this)}/>
        </View>

        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    );
  }

  /*
  For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
  */
  _renderInputButtons() {
    let views = []; // row views

    for (var r = 0; r < inputButtons.length; r ++) {
        let row = inputButtons[r];

        let inputRow = [];
        for (var i = 0; i < row.length; i ++) {
            let input = row[i];

            // set key = row-column
            inputRow.push(
                <InputButton
                    value={input}
                    highlight={this.state.selectedSymbol === input}
                    onPress={this._onInputButtonPressed.bind(this, input)}
                    key={r + "-" + i} />
            );
        }
        // make row 
        views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    switch(typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleSymbolInput(input)
    }
  }

  _handleNumberInput(num) {
    let inputValue = (this.state.inputValue * 10) + num

    this.setState({
      inputValue: inputValue
    });
  }

  _handleSymbolInput(str) {
    switch(str) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          prevInputValue: this.state.inputValue,
          inputValue: 0
        });
        break;
      case '=':
        let symbol = this.state.selectedSymbol,
            inputValue = this.state.inputValue,
            prevInputValue = this.state.prevInputValue

        if(!str) { return; }

        this.setState({
          prevInputValue: 0,
          inputValue: eval(prevInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;
    }
  }

  _onClearButtonPressed() {
    return () => {
      this.setState({
        prevInputValue: 0,
        inputValue: 0,
        selectedSymbol: null
      })
    }
  }
}