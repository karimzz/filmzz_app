import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ScrollView } from 'react-native' ;
import { Bars3BottomLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline"; 
import { styles } from '../Utils/Utils';
import TrendingMovies from '../Components/TrendingMovies';
import MovieList from '../Components/MovieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../Components/Loading';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpComingMovies } from '../Api/MovieDB';


export default function HomeScreen() {

    // For Store Trending Data 
    const [trending ,setTrending] = useState([]) ; 
    const [upcoming, setUpcoming] = useState([]) ; 
    const[topRated , setTopRated] = useState([]) ;

    // For Loadding 
    const [loadding , setLoadding] = useState(true)

    // For Detect OS 
    const isIos = Platform.OS == 'ios' ; 

    // For Change Route
    const navigation = useNavigation() ; 


    // For Call APi To Get Data
    useEffect(()=>{
        getTrendingMovies() ; 
        getUpComingMovie()  ; 
        getTopRatedMovies()
    } , [])

    const getTrendingMovies = async ()=>{
        const data =  await fetchTrendingMovies() ; 
        if(data && data.results){
            setTrending(data.results) ; 
            setLoadding(false) ; 
        } 
    }

    const getUpComingMovie = async ()=>{
        const data = await fetchUpComingMovies() ;
        if(data && data.results.length > 0 ){
            setUpcoming(data.results) ;  
            setLoadding(false) ; 
        }
    }

    // For Fetch Top Rated Movies
    const getTopRatedMovies= async ()=>{
        const response = await fetchTopRatedMovies() ; 
        if(response && response.results){
            setTopRated(response.results ); 
            setLoadding(false) ; 
        }
    }


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
                {
                    trending.length > 0 && <TrendingMovies data={trending} />
                }
                

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