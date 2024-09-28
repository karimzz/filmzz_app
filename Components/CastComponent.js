import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBase185 } from '../Api/MovieDB';

export default function CastComponent({data}) {

    // For Navigate To Another Screen
    const navigation = useNavigation() ; 

    console.log(data) ;

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
                            <Image className="rounded-2xl h-24 w-20" source={{uri : ImageBase185(person?.profile_path)}} />
                        </View>
                        {/*<Text className="text-white mt-1 text-xs">{person?.character.length >10 ? person?.character.slice(0,10)+"..." :person?.character }</Text>*/}
                        <Text className="text-white mt-1 text-xs" > {person?person.character.length > 10 ? person.character.slice(0,10)+"..." :person.character:"" } </Text>
                        <Text className="text-neutral-400 mt-1 text-xs">{person?person.original_name : ""}</Text>
                    </TouchableOpacity>
                )
            })
        }
        </ScrollView>
    </View>
  )
}