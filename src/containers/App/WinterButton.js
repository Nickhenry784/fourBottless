import { useNavigation } from '@react-navigation/native';
import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn } from './actions';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function WinterButton({ turn }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleChangeToWinter = () => {
    if (turn <= 0) return false;
    dispatch(decrementTurn(1));
    navigation.navigate('Winter');
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onHandleChangeToWinter();
      }}>
      <Image style={homeStyle.season} source={images.home.winter} />
    </TouchableOpacity>
  );
}
WinterButton.propTypes = {
  turn: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});
export default connect(mapStateToProps)(WinterButton);
