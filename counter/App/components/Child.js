import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
class Child extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.counter}</Text>
      </View>
    );
  }
}
mapStateToPros = state => ({
  counter: state.counter,
});
export default connect(
  mapStateToPros,
  null,
)(Child);

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: '#000',
  },
});
