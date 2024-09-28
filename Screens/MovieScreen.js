import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Platform, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { styles, theme } from '../Utils/Utils';
import {HeartIcon} from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import CastComponent from '../Components/CastComponent';
import MovieList from '../Components/MovieList';
import { fetchMovieCredite, fetchMovieDetails, fetchMovieSimilar, ImageBase500 } from '../Api/MovieDB';


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
    const [simlilar , setSimlilar] = useState([]) ;

    // For Store Movie Details
    const [movie , setMovie] = useState({}) ;

    // For Store Cast Data
    const [cast  , setCast] = useState([] ) ; 

    // For Access Params
    const {params} = useRoute() ; 

    const getSimilarMovies = async (id)=>{
        const data = await fetchMovieSimilar(id) ;
        if(data && data.results.length > 0 ){
            setSimlilar(data.results);
            
        } 
    }

    // For Get Movie Details
    const getMovieDetails = async (id)=>{
        const data = await fetchMovieDetails(id) ; 
        if(data ){
            setMovie(data)
        }
    }

    // For Get Movie Credite
    const getMovieCredite = async (id)=>{
        const data = await fetchMovieCredite(id) ; 
        if(data  && data.cast){
            setCast(data.cast)
        }
    }

    // For call API to get the data
    useEffect(()=>{
        getSimilarMovies(params.id) ; 
        getMovieDetails(params.id) ; 
        getMovieCredite(params.id)
    } , [params]) ;

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
            <Image className="" source={{uri : ImageBase500(movie?.poster_path)}}  style={{width , height :height * .43}} />
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
            {movie?.title}
        </Text>
        {/* Status, Release , runtime */}
        {
        movie?.id?(
        <Text className="text-neutral-400 text-base font-semibold text-center">
            {movie?.status} . {movie?.release_date?.split("-")[0]} . {movie?.runtime} min 
        </Text>) : null
        }
        
        {/* Genres */}
        
        <View className="flex-row justify-center mx-4 space-x-2">
            {
            movie?.genres?.map((genre , id)=>{
                return (
                    <Text key={id} className="text-neutral-400 font-semibold text-center text-base">
                        {genre?.name} . 
                    </Text>
                )
                })
            }
            
            
        </View>
        {/* Describtion */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
            {
                movie?.overview
            }
        </Text>
    </View>
    
    {/* Cast */}
    <CastComponent data={cast} />

    {/* Simlilar Movies  */}
    <MovieList title={"Simlirar Movies"} hideSeeAll={true} data={simlilar} />

    </ScrollView>
  )
}