import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { images } from 'assets/images';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { decrementTurn } from './actions';
import { homeStyle } from './style';
import { makeSelectTurn } from './selectors';

function FallButton({ turn }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleChangeToFall = () => {
    if (turn <= 0) return false;
    dispatch(decrementTurn(1));
    navigation.navigate('Fall');
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onHandleChangeToFall();
      }}>
      <Image style={homeStyle.season} source={images.home.fall} />
    </TouchableOpacity>
  );
}
FallButton.propTypes = {
  turn: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});
export default connect(mapStateToProps)(FallButton);
