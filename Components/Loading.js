import { View, Dimensions } from 'react-native' ; 
import * as Progress from 'react-native-progress';

import React from 'react';
import { theme } from '../Utils/Utils';

// For Calculate Dimesnions
const {width , height} = Dimensions.get("window") ;

export default function Loading() {
  return (
    <View style={{width , height}} className="absolute flex-row justify-center items-center">
        <Progress.CircleSnail  duration={1000} hidesWhenStopped  thickness={12} size={160} color={theme.background}  />
    </View>
  )
}