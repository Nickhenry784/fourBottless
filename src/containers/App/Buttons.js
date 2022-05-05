import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { initConnection } from 'react-native-iap';
import { buttonStyle } from './style';
import Payment from './Payment';

function Buttons() {
  return (
    <View style={buttonStyle.buttons}>
      <Payment />
    </View>
  );
}

Buttons.propTypes = {};

export default Buttons;
