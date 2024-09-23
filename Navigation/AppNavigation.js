import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MovieScreen from '../Screens/MovieScreen';
import PersonScreen from '../Screens/PersonScreen';
import SearchScreen from '../Screens/SearchScreen';

export default function AppNavigation() {



    // For Create Route 
    const Stack = createNativeStackNavigator() ;

    return (
    <GestureHandlerRootView>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName='home'>
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="movie" component={MovieScreen} />
                <Stack.Screen name="person" component={PersonScreen} />
                <Stack.Screen name="search" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </GestureHandlerRootView>
    )
}