import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CastComponent({data}) {

    // For Navigate To Another Screen
    const navigation = useNavigation() ; 

  return (
    <View className="my-6">
        <Text className="text-white text-xl mx-4 mb-5">Top Cast</Text>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal : 15}}
        >
        {
            data && data.map((person,idx)=>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate("person" , person)} key={idx} className="mr-4 items-center">
                        <View className="overflow-hidden rounded-full h-20 w-20 items-center border-neutral-400">
                            <Image className="rounded-2xl h-24 w-20" source={require("../assets/actor.jpg")} />
                        </View>
                        <Text className="text-white mt-1 text-xs">John Wick</Text>
                        <Text className="text-neutral-400 mt-1 text-xs">John Wick</Text>
                    </TouchableOpacity>
                )
            })
        }
        </ScrollView>
    </View>
  )
}