import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Child from './Child';
import ButtonComp from './Button';
import {connect} from 'react-redux';
import * as actions from '../actions';
class Main extends Component {
  handleIncrease = () => {
    this.props.counterIncrease();
  };

  handleDecrease = () => {
    this.props.counterDecrease();
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Child />
        </View>
        <View style={{flex: 1}}>
          <ButtonComp
            title="Increase"
            textColor="#fff"
            bgColor="#397af8"
            onPress={this.handleIncrease}
          />
          <ButtonComp
            title="Decrease"
            bgColor="orange"
            onPress={this.handleDecrease}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  actions,
)(Main);

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  btnStyle: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: '#15c',
  },
});
