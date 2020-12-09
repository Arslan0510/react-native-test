/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Login from './app/screen/Login';
import reducer from './app/redux/reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <SafeAreaView>
          <Login />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
