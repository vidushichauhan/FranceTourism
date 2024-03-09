import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Discover = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View>
      <View>
       <Text>Discover</Text>
       <Text>The Beauty of France</Text>
      </View>
      <View>
      
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Discover