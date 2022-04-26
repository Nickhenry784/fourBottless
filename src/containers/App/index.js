import { images } from 'assets/images';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import { createStackNavigator } from '@react-navigation/stack';
import Buttons from './Buttons';
import reducer from './reducer';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';
import Fall from './Fall';
import Summer from './Summer';
import Spring from './Spring';
import Winter from './Winter';

const Stack = createStackNavigator();

const key = 'App';

function App({ turn }) {
  useInjectReducer({ key, reducer });
  const [isShowButtons, setShowButtons] = useState(false);
  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Fall" component={Fall} />
        <Stack.Screen name="Summer" component={Summer} />
        <Stack.Screen name="Spring" component={Spring} />
        <Stack.Screen name="Winter" component={Winter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

App.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(App);
