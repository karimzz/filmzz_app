import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Utils/Utils';
import {  HeartIcon } from 'react-native-heroicons/solid';
import { ChevronDoubleLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../Components/MovieList';
import Loading from '../Components/Loading';


// For Calculate The Dimensions
const {width , height} = Dimensions.get("window") ;

const isIos = Platform.OS == 'ios' ; 



export default function PersonScreen() {

    // For Loadding 
    const [loadding , setLoadding] = useState(true)

    // For Store Person Data
    const [personData , setPersonData] = useState([12,3,4,45,6]) ; 
    
    // For Handle Favorite
    const [isFavorite , setIsFavorite] = useState(false) ; 

    const verticalMargin = isIos ?"" : "my-3"

    // For Change Route
    const navigation = useNavigation() ; 

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom : 20}} >
      {/* back button */}
      <SafeAreaView className={` w-full z-20 flex-row justify-between items-center px-4 ${verticalMargin}`} >
            <TouchableOpacity onPress={()=>navigate.goBack()} style={styles.background} className="rounded-xl p-1">
                <ChevronLeftIcon size="28" strokeWidth={2.5} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)}>
                <HeartIcon size={28} color={isFavorite ? "red" : "white"} />
            </TouchableOpacity>
        </SafeAreaView>
        {/* Person Details */}
        {
          loadding ? (
            <Loading />
          ) : (
            <View>
            <View className="flex-row justify-center" style={{
              shadowColor : "gray" , 
              shadowRadius : 40 , 
              shadowOffset : {width : 0 , height : 5},
              shadowOpacity : 1 ,
              elevation: 5,
            }}>
              <View className="rounded-full overflow-hidden h-72 w-72 border-2 items-center border-neutral-500">
                <Image source={require("../assets/highest-gross-actor_mobile.webp")} style={{width: width * .80 , height:height * .43}} />
              </View>
            </View>
            <View className="mt-6">
              <Text className="text-white font-bold text-3xl text-center">Keanu Reverse</Text>
              <Text className="text-base text-neutral-500 text-center">London, United Kingdom</Text>
            </View>
            <View className="mt-6 p-4 mx-3 flex-row justify-between items-center bg-neutral-700 rounded-full">
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Gender</Text>
                <Text className="text-neutral-300 text-sm">Male</Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Birthday</Text>
                <Text className="text-neutral-300 text-sm">1990-04-22</Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Known for</Text>
                <Text className="text-neutral-300 text-sm">Acting</Text>
              </View>
              <View className=" px-2 items-center">
                <Text className="text-white font-semibold">Popularity</Text>
                <Text className="text-neutral-300 text-sm">65.34</Text>
              </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
              <Text className="text-white text-lg">Biography</Text>
              <Text className="text-neutral-400 tracking-wide">Memphis Eve Sunny Day Hewson, known professionally as Eve Hewson, is an Irish actress. Her first major role was in the drama film This Must Be the Place</Text>
            </View>
            {/* Movie */}
            <MovieList title={"Movies"} hideSeeAll={true} data={personData} />
          </View>
          )
        }
        
    </ScrollView>
  )
}