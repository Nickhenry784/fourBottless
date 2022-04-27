import { useNavigation } from '@react-navigation/native';
import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  BackHandler,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { dateNow } from 'utils/date';
import { addNoteList, decrementTurn, removeNoteList } from './actions';
import { makeSelectNoteList, makeSelectTurn } from './selectors';
import { homeStyle } from './style';

// eslint-disable-next-line react/prop-types
function HomeView({ turn, noteList }) {
  const navigation = useNavigation();
  // const notelist = notes.notes;
  const onClickStartButton = () => {
    if (turn === 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    dispatch(decrementTurn());
    navigation.navigate('notesList');
  };

  const dispatch = useDispatch();

  return (
    <View style={homeStyle.homeView}>
      <StatusBar hidden />
      <Image source={images.home.header} style={homeStyle.headerImg} />
      <View style={homeStyle.cennterView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('buy')}
          style={homeStyle.buttonView}>
          <Text style={homeStyle.textButton}>{`Buy Turn: ${turn}`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClickStartButton}
          style={homeStyle.buttonView}>
          <Text style={homeStyle.textButton}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => BackHandler.exitApp()}
          style={homeStyle.quitView}>
          <Text style={homeStyle.textButton}>Quit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeView.propTypes = {
  turn: PropTypes.number,
  noteList: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  noteList: makeSelectNoteList(),
});

export default connect(mapStateToProps)(HomeView);
