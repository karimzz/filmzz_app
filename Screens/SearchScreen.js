import { View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import {XMarkIcon} from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native';
import Loading from '../Components/Loading';


// For Calculate The Dimensions
const {width , height} = Dimensions.get("window" ) ;

export default function SearchScreen() {

  // For Change Route
  const navigation = useNavigation() ; 

  // For Store Search Results
  const [results , setResults] = useState([1,2,3,4,5,6,6,7]);

  // For Loadding Screen
  const [loadding , setLoadding] = useState(false) ;

  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
        <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
            <TextInput placeholder='Search Movie'
            placeholderTextColor="lightgray"
            className="pt-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
            />
            <TouchableOpacity onPress={()=>navigation.navigate("home")} className="rounded-full p-3 m-1 bg-neutral-500">
              <XMarkIcon color={"white"} size={25} />
            </TouchableOpacity>
        </View>
        {/* Results */}
        {
          loadding  ? (
            <Loading />) : 
            results.length > 0 ? (
              <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal : 15}}
          className="space-y-3"
          >
            <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
            <View className="flex-row justify-between flex-wrap">
              {
                results.map((item , idx)=>{
                  return (
                    <TouchableWithoutFeedback key={idx} onPress={()=>navigation.push("movie")}>
                      <View className="mb-4 space-y-2">
                        <Image className="rounded-3xl" style={{width: width * .44 , height: height * .30}} source={require("./../assets/fim.jpg")}  />
                        <Text className="ml-1 text-neutral-400">Movie Name</Text>
                      </View>
                    </TouchableWithoutFeedback> 
                  )
                })
              }
            </View>
          </ScrollView>
            ) :(
              <View className="flex-row justify-center">
                <Image className="h-80 w-96" source={require("../assets/corn.png")} />
              </View>
            )

          
        }

    </SafeAreaView>
  )
}