import { useNavigation } from '@react-navigation/native';
import { images } from 'assets/images';
import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn } from './actions';
import { makeSelectTurn } from './selectors';
import { homeStyle } from './style';

function SummerButton({ turn }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleChangeToSummer = () => {
    if (turn <= 0) return false;
    dispatch(decrementTurn(1));
    navigation.navigate('Summer');
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onHandleChangeToSummer();
      }}>
      <Image style={homeStyle.season} source={images.home.summer} />
    </TouchableOpacity>
  );
}
SummerButton.propTypes = {
  turn: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});
export default connect(mapStateToProps)(SummerButton);
