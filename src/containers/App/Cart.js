import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function Spring({ turn }) {
  return (
    <View style={[homeStyle.container, homeStyle.cart]}>
      <Text style={homeStyle.turn}>{turn}</Text>
      <Image style={homeStyle.buy} source={images.home.buy} />
    </View>
  );
}
Spring.propTypes = {
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(Spring);
