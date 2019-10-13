import React, {Component} from 'react';
import {View} from 'react-native';
import Main from './App/components/Main';
import {Provider} from 'react-redux';
import store from './App/store';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}>
          <Main />
        </View>
      </Provider>
    );
  }
}
