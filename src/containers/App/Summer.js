import { images } from 'assets/images';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import 'react-native-gesture-handler';
import Cart from './Cart';
import FallButton from './FallButton';
import SpringButton from './SpringButton';
import { homeStyle } from './style';
import WinterButton from './WinterButton';

function Summer(props) {
  return (
    <ImageBackground
      style={homeStyle.background}
      source={images.home.backgroundSummer}>
      <View style={homeStyle.home}>
        <Cart />
        <View style={[homeStyle.container, homeStyle.seasonGroup]}>
          <WinterButton />
          <FallButton />
          <SpringButton />
        </View>
      </View>
    </ImageBackground>
  );
}
Summer.propTypes = {};

export default Summer;
