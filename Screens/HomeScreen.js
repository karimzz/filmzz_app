import React, { useState } from 'react'
import { View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ScrollView } from 'react-native' ;
import { Bars3BottomLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"; 
import { styles } from '../Utils/Utils';
import TrendingMovies from '../Components/TrendingMovies';
import MovieList from '../Components/MovieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../Components/Loading';


export default function HomeScreen() {

    // For Store Trending Data 
    const [trending ,setTrending] = useState([1,2,3]) ; 
    const [upcoming, setUpcoming] = useState([1,2,3]) ; 
    const[topRated , setTopRated] = useState([1,2,3]) ;

    // For Detect OS 
    const isIos = Platform.OS == 'ios' ; 

    // For Loadding 
    const [loadding , setLoadding] = useState(false)

    // For Change Route
    const navigation = useNavigation() ; 

  return (
    <View className="flex-1 bg-neutral-800">
        {/* Search bar and Logo */}
        <SafeAreaView className={`${isIos ? 'mb-2' : 'mb-3'}`}>
            <StatusBar  barStyle="light-content"  />
            <View className="flex-row justify-between items-center mx-4">
                <Bars3BottomLeftIcon size={30} strokeWidth={2} color={"white"} />
                <Text className="text-white font-bold text-3xl"> <Text style={styles.text}>M</Text>ovies</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("search")}>
                    <MagnifyingGlassIcon size={30} color={"white"} strokeWidth={2} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {
            loadding ? 
            
            (<Loading  />) : 
            (
            <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{paddingBottom : 10}}>
                {/* Trending Movies Carousal */}
                <TrendingMovies data={trending} />

                {/* Up Coming Movies */}
                <MovieList title={"Up Coming"} data={upcoming} />
                
                {/* Top Rated Movies */}
                <MovieList title={"Top Rated"} data={topRated} />
        </ScrollView>
            )
        }
        
    </View>
  )
}