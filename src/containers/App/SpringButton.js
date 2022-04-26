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

function SpringButton({ turn }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onHandleChangeToSpring = () => {
    if (turn <= 0) return false;
    dispatch(decrementTurn(1));
    navigation.navigate('Spring');
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onHandleChangeToSpring();
      }}>
      <Image style={homeStyle.season} source={images.home.spring} />
    </TouchableOpacity>
  );
}
SpringButton.propTypes = {
  turn: PropTypes.number,
};
const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});
export default connect(mapStateToProps)(SpringButton);
