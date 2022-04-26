import { useNavigation } from '@react-navigation/native';
import { images } from 'assets/images';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import 'react-native-gesture-handler';
import Cart from './Cart';
import SpringButton from './SpringButton';
import { homeStyle } from './style';
import SummerButton from './SummerButton';
import WinterButton from './WinterButton';

function Spring(props) {
  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.backgroundFall}>
      <View style={homeStyle.home}>
        <Cart />
        <View style={[homeStyle.container, homeStyle.seasonGroup]}>
          <WinterButton />
          <SpringButton />
          <SummerButton />
        </View>
      </View>
    </ImageBackground>
  );
}
Spring.propTypes = {};

export default Spring;
