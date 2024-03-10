import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ItemCarDontainer = ({imageSrc,title,location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md w-[182px] bg-white my-2">
        <Image source={{uri:imageSrc}}
        className="w-40 h-40 rounded-md object-cover"></Image>
        
        <Text className="text-[#428288] text-[18px] font-bold ">
            {title.length>18? `${title.slice(0,18)}..`:title}</Text>
        <View className="flex-row items-center space-x-1">
        <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        <Text className="text-[#428288] relative text-[14px] font-bold ">
            {location.length>18? `${location.slice(0,18)}..`:location}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ItemCarDontainer