import axios from "axios";
import { API_KEY } from "../Utils/Utils";


// Endpoint
const apiBaseUrl = `https://api.themoviedb.org/3` ; 

const trendingMoviesEndPoint = `${apiBaseUrl}/trending/all/day?language=en-US0?api_key=${API_KEY}` ; 

const upComingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}` ; 

const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}` ;

// Dynamic Endpoint

const movieDetailsEndpoint = (movieId) => `${apiBaseUrl}/movie/${movieId}?language=en-US` ; 
const movieCreditesEndpoint = (movieId) => `${apiBaseUrl}/movie/${movieId}/credits?language=en-US` ; 
const movieSimilarEndpoint = (movieId) => `${apiBaseUrl}/movie/${movieId}/similar?language=en-US` ; 
const personDetailsEndpoint = (personId) => `${apiBaseUrl}/person/${personId}?language=en-US`
const personMovieEndpoint = (personId) => `${apiBaseUrl}/person/${personId}/movie_credits?language=en-US` ; 
const SearchMoviesEndpoint = (movieName) => `${apiBaseUrl}/search/movie?query=${movieName}&include_adult=false&language=en-US`

export const ImageBase500 = path=>path ? `https://image.tmdb.org/t/p/w500/${path}` :null
export const ImageBase342= path=>path ? `https://image.tmdb.org/t/p/w342/${path}` :null
export const ImageBase185 = path=>path ? `https://image.tmdb.org/t/p/w185/${path}` :null



const apiCall = async(endPint , params)=>{
    const option = {
        method : "GET" , 
        url : endPint,
        params : params ? params : {} , 
        
    }
    try{
        const response = await axios.request(option) ; 
        return response.data ; 
    }catch(error){
        console.log(error) ; 
        return error
    }
}

export const fetchTrendingMovies = async ()=>{
    const response = await axios.get(trendingMoviesEndPoint , {
        headers : {
            Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
        }
        
    })
    return response.data ; 
}

export const fetchTopRatedMovies = async ()=>{
    try{
        const response = await axios.get(topRatedMoviesEndPoint , {
            headers : {
                Authorization :`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY'`
            }
        }) ; 
        return response.data ; 
    }catch(error){
        return error ; 
    }
}

export const fetchUpComingMovies = async ()=>{
    try{
        const response = await axios.get(upComingMoviesEndPoint , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
            }
        }) ; 
        return response.data ; 
    }catch(error){
        return error ; 
    }
}

// For Get Movie Details
export const fetchMovieDetails = async (id)=>{
    const response = await axios.get(movieDetailsEndpoint(id) , {
        headers : {
            Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
        }
    })
    return response.data
}

export const fetchMovieSimilar = async (id)=>{
    try{
        const response = await axios.get(movieSimilarEndpoint(id) , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
            }
        })
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const fetchMovieCredite = async (id)=>{
    try{
        const response = await axios.get(movieCreditesEndpoint(id) , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
            }
        })
        return response.data
    }catch(error){
        console.log(error) ; 
    }
}


export const fetchPersonDetails = async (id)=>{
    try{
        const response = await axios.get(personDetailsEndpoint(id) , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
            }
        })

        return response.data
    }catch(error){
        console.log(error) ; 
    }
}

export const fetchPersonMovies = async (id)=>{
    try{
        const response = await axios.get(personMovieEndpoint(id) , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
            }
        })
        return response.data
    }catch(error){
        console.log(error) ; 
    }
}

export const fetchMoviesSearch = async (movieName)=>{
    try{
        const response = await axios.get(SearchMoviesEndpoint(movieName) , {
            headers : {
                Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGZjOTBjYjYzNDg0YjVkMzVlYWVmMmQ5ZDVjMWQxMSIsIm5iZiI6MTcyNzI2MTcyNS4yMzYyMzgsInN1YiI6IjY2ZWIzMjE5ODJmZjg3M2Y3ZDFmODE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tzfk3Hm9oN-a2UEcVVH2CFu8qTvoToWFoSYH93xfWyY`
            }
        })
        return response.data
    }catch(error){
        console.log(error) ; 
    }
}






