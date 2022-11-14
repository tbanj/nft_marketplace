import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { EthPrice, NFTTitle} from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';


const DetailsBids = ({bid}) => {
  const [first, setfirst] = useState('')
  return (
    <>
      <View>
        <NFTTitle 
          title={bid.name}
          subTitle={bid.creator}
          titleSize={SIZES.font}
        
        />

        <EthPrice price={bid.price}/>
      </View>
    </>
  )
}

export default DetailsBids