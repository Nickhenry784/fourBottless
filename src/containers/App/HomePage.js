import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import { images } from 'assets/images';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SizedBox } from 'sizedbox';
import { FlatGrid } from 'react-native-super-grid';
import { randomIntFromInterval } from 'utils/number';
import { makeSelectIsPlayState, makeSelectTurn } from './selectors';
import { appStyle } from './style';
import { decrementTurn } from './actions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const listBottlesImage = [
  images.home.bottles1,
  images.home.bottles2,
  images.home.bottles3,
  images.home.bottles4,
];

function HomePage({ dispatch, turn }) {
  const [rotateList, setRotateList] = useState([0, 0, 0, 0]);
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(300);
  const resultValue = useRef(4);
  const numCol = 2;

  useEffect(() => {
    const timeCountDown = 5;
    const coutDown = setTimeout(() => {
      if (play && time <= 0) {
        setPlay(false);
        setTime(300);
        dispatch(decrementTurn());
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < listBottlesImage.length; index++) {
          const element = rotateList[index];
          if (element === 0) {
            resultValue.current += 1;
          }
        }
      }
      if (play && time > 0) {
        setTime(time - timeCountDown);
        const list = [...rotateList];
        // eslint-disable-next-line no-plusplus
        for (let index = 0; index < listBottlesImage.length; index++) {
          list[index] =
            randomIntFromInterval(0, 3) === 0
              ? randomIntFromInterval(0, 360) * 0
              : randomIntFromInterval(0, 360);
          setRotateList(list);
        }
      }
    }, timeCountDown);
    return () => {
      clearTimeout(coutDown);
    };
  }, [time, play]);

  const onClickPlayButton = () => {
    if (turn <= 0) {
      Alert.alert('Please buy more turn');
      return false;
    }
    setPlay(true);
    resultValue.current = 0;
  };

  return (
    <View style={appStyle.homeView}>
      <View style={appStyle.resultView}>
        {!play && (
          <Image
            source={
              resultValue.current === 4 ? images.home.win : images.home.lose
            }
            style={appStyle.resultImage}
          />
        )}
      </View>
      <SizedBox vertical={10} />
      <View style={appStyle.bottlesView}>
        <FlatList
          data={listBottlesImage}
          scrollEnabled={false}
          numColumns={numCol}
          renderItem={({ item, index }) => (
            <View>
              {!play && (
                <Image
                  source={
                    rotateList[index] === 0
                      ? images.home.true
                      : images.home.false
                  }
                  style={appStyle.stateResult}
                />
              )}
              <Animated.View
                style={[
                  {
                    width: windowWidth * 0.2,
                    height: windowHeight * 0.2,
                    margin: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: [
                      {
                        rotate: `${rotateList[index]}deg`,
                      },
                    ],
                  },
                ]}>
                <Image source={item} style={appStyle.bottlesImage} />
              </Animated.View>
            </View>
          )}
        />
      </View>
      <SizedBox vertical={10} />
      {!play && (
        <TouchableOpacity
          onPress={onClickPlayButton}
          onLongPress={onClickPlayButton}>
          <Image source={images.home.play} style={appStyle.playImage} />
        </TouchableOpacity>
      )}
    </View>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  turn: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(HomePage);
