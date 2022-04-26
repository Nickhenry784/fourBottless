import { images } from 'assets/images';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import 'react-native-gesture-handler';
import Cart from './Cart';
import FallButton from './FallButton';
import SpringButton from './SpringButton';
import { homeStyle } from './style';
import SummerButton from './SummerButton';

function Winter(props) {
  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.backgroundWinter}>
      <View style={homeStyle.home}>
        <Cart />
        <View style={[homeStyle.container, homeStyle.seasonGroup]}>
          <FallButton />
          <SpringButton />
          <SummerButton />
        </View>
      </View>
    </ImageBackground>
  );
}
Winter.propTypes = {};

export default Winter;
