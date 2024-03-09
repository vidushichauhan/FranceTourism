import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets/index.js';
const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

  return (
        <SafeAreaView className="bg bg-white flex-1 relative">
           {/*First Section*/}
           <View className="flex-row px-6 mt-1 items-center space-x-1">
            <View className="w-20 h-20 bg-black rounded-full items-center justify-center">
                <Text className="text-[#00BCC9] text-2xl font-semibold">France</Text>
            </View>
                <Text className="text-[#2A2B4B] text-2xl font-semibold">Tourism</Text>
           </View>
           {/*Second Section*/}
           <View className="px-4 mt-84 space-y-2">
            <Text className="text-[#3C6072] text-[38px]">
                Enjoy The Trip With
            </Text>
            <Text className="text-[#00BCC9] text-[38px] font-bold">
                Good Moments
            </Text>
            <Text className="text-[#3C6072] text-base">
                Get to know which place you want to go with us.
                Take a test of your personality and find out your kind of places..!!
            </Text>
           </View>
           {/*Circle Section*/}
           <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36 "></View>
           <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36 "></View>
           {/*Image Container*/}
           <View className="flex-1 relative items-center justify-center">
           <Animatable.Image 
           animation="fadeIn" 
           easing="ease-in-out" source={HeroImage} className=" w-full h-full object-cover mt-20 "/>
           <TouchableOpacity 
           onPress={()=>navigation.navigate("Discover")}
            className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
            <Animatable.View animation="pulse" iterationCount="infinite" easing="ease-in-out"className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
           </TouchableOpacity>
           </View>
           
        </SafeAreaView>

  )
}

export default HomeScreen