import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { EthPrice, NFTTitle} from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBids = ({bid}) => {
  const [first, setfirst] = useState('')
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      marginVertical: SIZES.base,
      paddingHorizontal: SIZES.base * 2,

    }}>
    <Image style={{ width: 48, height: 48}}
      source={bid.image}
      resizeMode="contain"
      
    />

    <View >
      <Text style={{
        fontSize: SIZES.small,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
      }}
      
      >Bid placed by{bid.name}</Text>

      <Text style={{
        fontSize: SIZES.small -2,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        marginTop: 3,
      }}
      
      >{bid.date}</Text>
    </View>
    <EthPrice price={bid.price}/>
  </View>
  )
}

export default DetailsBids