import { View, Text, Dimensions } from 'react-native'
import React, { useMemo, useState }  from 'react'
import Carousel from 'react-native-reanimated-carousel'
import MovieCard from './MovieCard'
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function TrendingMovies({data}) {

  const window = Dimensions.get('window');
const PAGE_WIDTH = window.width;

  const [mode, setMode] = useState('horizontal');
  const [snapDirection, setSnapDirection] = useState('left');
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [enableSnap, setEnableSnap] = useState(true);
  const [loop, setLoop] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);
  const [autoPlayReverse, setAutoPlayReverse] = useState(false);

  const animationConfig = useMemo(() => {
      const basic = {
          mode,
          snapDirection,
      };
      if (mode === 'vertical') {
          return {
              ...basic,
              stackInterval: 8,
          };
      }
      return basic;
  }, [mode, snapDirection]);

  // For Change Route
  const navigation = useNavigation() ; 

  // For Choose Film Function
  const handleClick = (item)=>{
    navigation.navigate('movie', item  ) ; 
  }

  
  return (
    <View style={{ flex: 1 }}>

    <View className="mb-8 flex-1">
      <Text style={{color : "white"}} className={`text-xl mx-4 mb-5`}>Trending</Text>
      <View
            style={{
                flex: 1,
            }}
        >
        <Carousel
        style={{
            height: PAGE_WIDTH * 0.8,
            width: PAGE_WIDTH,
            alignSelf: 'center',
            justifyContent: 'center',
        }}
        pagingEnabled={pagingEnabled}
        enableSnap={enableSnap}
        mode="stack"
        stackInterval={100}
        opacityInterval={.1}
        loop={loop}
        width={window.width * .62}
        height={210}
        autoPlay={autoPlay}
        autoPlayReverse={autoPlayReverse}
        data={[...Array(6).keys()]}
        animationConfig={animationConfig}
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick} />}
    />
            
        </View>
    </View>
    </View>
  )
}