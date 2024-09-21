import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ScrollView } from 'react-native' ;
import { Bars3BottomLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"; 
import { styles } from '../Utils/Utils';
import TrendingMovies from '../Components/TrendingMovies';
import MovieList from '../Components/MovieList';


export default function HomeScreen() {

    // For Store Trending Data 
    const [trending ,setTrending] = useState([1,2,3]) ; 
    const [upcoming, setUpcoming] = useState([1,2,3]) ; 
    const[topRated , setTopRated] = useState([1,2,3]) ;

    // For Detect OS 
    const isIos = Platform.OS == 'ios' ; 

  return (
    <View className="flex-1 bg-neutral-800">
        {/* Search bar and Logo */}
        <SafeAreaView className={`${isIos ? 'mb-2' : 'mb-3'}`}>
            <StatusBar  barStyle="light-content"  />
            <View className="flex-row justify-between items-center mx-4">
                <Bars3BottomLeftIcon size={30} strokeWidth={2} color={"white"} />
                <Text className="text-white font-bold text-3xl"> <Text style={styles.text}>M</Text>ovies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size={30} color={"white"} strokeWidth={2} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{paddingBottom : 10}}>
            {/* Trending Movies Carousal */}
            <TrendingMovies data={trending} />

            {/* Up Coming Movies */}
            <MovieList title={"Up Coming"} data={upcoming} />
            
            {/* Top Rated Movies */}
            <MovieList title={"Top Rated"} data={topRated} />
        </ScrollView>
    </View>
  )
}