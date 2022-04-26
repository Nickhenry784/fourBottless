import { images } from 'assets/images';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import 'react-native-gesture-handler';
import Cart from './Cart';
import FallButton from './FallButton';
import { homeStyle } from './style';
import SummerButton from './SummerButton';
import WinterButton from './WinterButton';

function Spring(props) {
  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.backgroundSpring}>
      <View style={homeStyle.home}>
        <Cart />
        <View style={[homeStyle.container, homeStyle.seasonGroup]}>
          <WinterButton />
          <FallButton />
          <SummerButton />
        </View>
      </View>
    </ImageBackground>
  );
}
Spring.propTypes = {};

export default Spring;
