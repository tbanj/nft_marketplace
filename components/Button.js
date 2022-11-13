import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  )
}

export const CircleButton = ({imgUrl, handlePress,
  ...props
}) => {
  return (
    <TouchableOpacity style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: "absolute",
      borderRadius: SIZES.extraLarge,
      alignItems: "center",
      justifyContent: "center",
      ...SHADOWS.light,
      ...props,

      }}
      onPress={handlePress}
    >
      <Image source={imgUrl}
        resizeMethod='contain'
        style={{ width: 24, height: 24}}
        
        />
    </TouchableOpacity>
    
  )
}

