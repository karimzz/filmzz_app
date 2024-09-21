import { View, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'

export default function MovieCard ({item , handleClick}) {

    // For Calculate The Dimensions 
    const {width , height} = Dimensions.get("window") ; 

  return (
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
    <View >
        <Image source={require("./../assets/fim.jpg")} 
        style={{width : width * .58 , height : height * .40}}
        className="rounded-3xl"
        />
    </View>
    </TouchableWithoutFeedback>
  )
}