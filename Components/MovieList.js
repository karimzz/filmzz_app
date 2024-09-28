import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../Utils/Utils'
import { useNavigation } from '@react-navigation/native'
import { ImageBase185 } from '../Api/MovieDB'

export default function MovieList({title ,data , hideSeeAll}) {

  // For Navigation
  const navigate = useNavigation() ; 

  // For Calculate Dimensions
  const {width , height} = Dimensions.get("window") ; 


  return (
    <View className="mb-8 space-y-4">
        <View className="flex-row justify-between items-center mx-4">
            <Text className="text-white text-xl">{title}</Text>
            <TouchableOpacity>
                <Text style={styles.text}> {hideSeeAll ? "" : "See All"}</Text>
            </TouchableOpacity>
        </View>
        {/* Movie Row */}
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal : 15}}
        >
          {
            data.map((item , idx)=>{
              return ( 
                <TouchableWithoutFeedback onPress={()=>navigate.push('movie' , item)} key={idx} >
                    <View className="space-y-1 mr-4">
                      <Image className="rounded-3xl" style={{width:width * .33, height : height *.22}} source={{uri : ImageBase185(item.poster_path)}} />
                      <Text className="text-neutral-300 ml-1">{item.original_title ? item.original_title.length >14 ?item.original_title.slice(0,8) : item.original_title  : ""} </Text>
                    </View>
                </TouchableWithoutFeedback>
              )
            })
          }
        </ScrollView>
    </View>
  )
}