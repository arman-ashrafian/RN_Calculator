import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from '../styles/style';

export default class ClearButton extends Component {

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <Text style={Style.clearButtonText}> CLEAR </Text>
            </TouchableHighlight>
        )
    }
}