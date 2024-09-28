import { View, Text, Dimensions, Platform, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Utils/Utils';
import {  HeartIcon } from 'react-native-heroicons/solid';
import {  ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation, useRoute } from '@react-navigation/native';
import MovieList from '../Components/MovieList';
import Loading from '../Components/Loading';
import { fetchPersonDetails, fetchPersonMovies, ImageBase342, ImageBase500 } from '../Api/MovieDB';


// For Calculate The Dimensions
const {width , height} = Dimensions.get("window") ;

const isIos = Platform.OS == 'ios' ; 



export default function PersonScreen() {

    // For Access Params
    const {params} = useRoute() ; 

    // For Loadding 
    const [loadding , setLoadding] = useState(false)

    // For Store Person Data
    const [personData , setPersonData] = useState({}) ;
    
    // For Store Movies Related To Person
    const [personMovies , setPersonMovies] = useState([]) ; 
    
    // For Handle Favorite
    const [isFavorite , setIsFavorite] = useState(false) ; 

    const verticalMargin = isIos ?"" : "my-3"

    // For Change Route
    const navigation = useNavigation() ; 

    // For Get Person Details 
    const getPersonDetails = async (id)=>{
      const response = await fetchPersonDetails(id) ;
      if(response){
        setPersonData(response) ;
        setLoadding(false)
      }
    }
    

    // For Get Person Movies 
    const getPersonMovies = async (ID)=>{
      const response = await fetchPersonMovies(ID) ;
      if(response && response.cast){
        setPersonMovies(response.cast) ; 
        setLoadding(false)
      }
    }

    useEffect(()=>{
      setLoadding(true) ; 
      getPersonDetails(params.id);
      getPersonMovies(params.id) ;
      
    } , [params]) 

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom : 20}} >
      {/* back button */}
      <SafeAreaView className={` w-full z-20 flex-row justify-between items-center px-4 ${verticalMargin}`} >
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.background} className="rounded-xl p-1">
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
                <Image source={{uri : ImageBase342(personData?.profile_path)}} style={{width: width * .80 , height:height * .43}} />
              </View>
            </View>
            <View className="mt-6">
              <Text className="text-white font-bold text-3xl text-center">
                {personData?.name}
              </Text>
              <Text className="text-base text-neutral-500 text-center"> {personData?.place_of_birth} </Text>
            </View>
            <View className="mt-6 p-4 mx-3 flex-row justify-between items-center bg-neutral-700 rounded-full">
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Gender</Text>
                <Text className="text-neutral-300 text-sm">{personData?.gender == 1 ?"Female" : "Male"}</Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Birthday</Text>
                <Text className="text-neutral-300 text-sm">{personData?.birthday}</Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Known for</Text>
                <Text className="text-neutral-300 text-sm">{personData?.known_for_department}</Text>
              </View>
              <View className=" px-2 items-center">
                <Text className="text-white font-semibold">Popularity</Text>
                <Text className="text-neutral-300 text-sm">{personData?.popularity?.toFixed(2)}%</Text>
              </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
              <Text className="text-white text-lg">Biography</Text>
              <Text className="text-neutral-400 tracking-wide">
                {personData?.biography || "N/A"}              
              </Text>
            </View>
            {/* Movie */}
            <MovieList title={"Movies"} hideSeeAll={true} data={personMovies} />
          </View>
          )
        }
        
    </ScrollView>
  )
}