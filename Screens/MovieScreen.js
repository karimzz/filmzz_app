import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { styles, theme } from '../Utils/Utils';
import {HeartIcon} from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import CastComponent from '../Components/CastComponent';
import MovieList from '../Components/MovieList';


export default function MovieScreen() {

    // For Change Route
    const navigate = useNavigation() ; 
    
    // For Detect OS
    const isIos = Platform.OS == 'ios' ; 
    const topMargin = isIos ?"" : "mt-3"

    // For Calculate The Dimensions
    const {width , height } = Dimensions.get("window" ) ; 

    // For Handle Favorite
    const [isFavorite , setIsFavorite] = useState(false) ; 

    // For Store Simlilar Movies
    const [simlilar , setSimlilar] = useState([1,2,3,4,5,6,7]) ;

    // For Store Cast Data
    const [cast  , setCast] = useState([1,2,3,4,5,6,7] ) ; 

    // For Access Params
    const {params} = useRoute() ; 

    // For call API to get the data
    useEffect(()=>{

    } , [params])

  return (
    <ScrollView
    contentContainerStyle={{paddingBottom : 20}}
    className="flex-1 bg-neutral-900"
    >

    {/* Back Button and movie poster */}
    <View className="w-full">
        <SafeAreaView className={` absolute w-full z-20 flex-row justify-between items-center px-4 ${topMargin}`} >
            <TouchableOpacity onPress={()=>navigate.goBack()} style={styles.background} className="rounded-xl p-1">
                <ChevronLeftIcon size="28" strokeWidth={2.5} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setIsFavorite(!isFavorite)}>
                <HeartIcon size={28} color={isFavorite ? theme.background : "white"} />
            </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image className="" source={require("../assets/fim.jpg")}  style={{width , height :height * .43}} />
            <LinearGradient 
            colors={["transparent" , "rgba(23,23,23,.2)" , "rgba(23,23,23, 1)"]}
            style={{width , height : height * .55}}
            start={{x : .5 ,y : 0}}
            end={{x : .5 , y :1}}
            className={"absolute bottom-0"}
            />
        </View>
    </View>
    {/* Movie Details */}
    <View style={{marginTop : height * .09}} className="space-y-3">
        <Text className="text-white font-bold text-center text-3xl tracking-wider">
            Ant-Man and Wasp1:Quantunmnia
        </Text>
        {/* Status, Release , runtime */}
        <Text className="text-neutral-400 text-base font-semibold text-center">
            Releaseed . 2020 . 170 min 
        </Text>
        {/* Genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
            <Text className="text-neutral-400 font-semibold text-center text-base">
                Action . 
            </Text>
            <Text className="text-neutral-400 font-semibold text-center text-base">
                Thrill . 
            </Text>
            <Text className="text-neutral-400 font-semibold text-center text-base">
                Commedy  
            </Text>
        </View>
        {/* Describtion */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
            A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.
        </Text>
    </View>
    
    {/* Cast */}
    <CastComponent data={cast} />

    {/* Simlilar Movies  */}
    <MovieList title={"Simlirar Movies"} hideSeeAll={true} data={simlilar} />

    </ScrollView>
  )
}