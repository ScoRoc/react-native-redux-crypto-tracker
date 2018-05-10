import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const CoinCard = () => {
  return (
    <View>
      <Text>{props.symbol}</Text>
      <Text>{props.price_usd}</Text>
      <Text>{props.percent_change_24h}</Text>
    </View>
  )
}

export default CoinCard;
