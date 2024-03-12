import { View,Text, SafeAreaView, Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Attractions, Avatar,WishList } from '../assets/index';
import { Hotels } from '../assets/index';
import { ScrollView } from 'react-native';
import { Restaurants } from "../assets/index"
import MenuContainer from '../components/MenuContainer';
import ItemCarDontainer from '../components/ItemCarDontainer';
import { getPlacesData } from '../api';


const Discover = () => {
    const navigation = useNavigation();

    const[type,setType]=useState("restaurants")
    const[isLoading,setIsLoading]=useState(false)
    const[mainData,setMainData]=useState([])
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, [navigation]);

    useEffect(()=>{setIsLoading(true);
       getPlacesData().then( data=>{
        setMainData(data);
        setInterval(()=>{setIsLoading(false)},1500)
       })
      },[])


  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-4">
      <View>
       <Text className="text-[30px] text-[#0B646B] font-bold">Discover</Text>
       <Text className="text-[#527283] text-[20px]">The Beauty of France</Text>
      </View>
      <TouchableOpacity onPress ={() => navigation.navigate("WishListScreen")} className="w-16 h-16 rounded-md item-center justify-center shadow-lg">
      <Image source={WishList} className="w-full h-full rounded-md object-cover"/>
      </TouchableOpacity>
      <View className="w-16 h-16 bg-white rounded-md item-center justify-center shadow-lg">
      <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
      </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
      <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{field:"geometry"}}
      fetchDetails = {true}
      placeholder='Search'
      onPress={(data, details = null) => {
        const jsonString = JSON.stringify({
          "northeast": {"lat": 35.00130301500388, "lng": -80.78295998100835},
          "southwest": {"lat": 30.35575693442233, "lng": -85.60516493123394}
        });
        details=jsonString;
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
      }}
      query={{
        key: 'Your API Key',
        language: 'en',
      }}
    />
      </View>
      {/*Menu Container*/}
      {isLoading?<View className="flex-1 justify-center item-center">
        <ActivityIndicator size="large" color="#0B646B" />
      </View>
      :
      <ScrollView>
      <View className="flex-row items-center justify-between px-4 mt-4">
      <MenuContainer
        key={"hotel"}
        title="Hotels"
        imageSrc={Hotels}
        type={type}
        setType={setType}
        />
        <MenuContainer
        key={"attractions"}
        title="Attractions"
        imageSrc={Attractions}
        type={type}
        setType={setType}
        />
        <MenuContainer
        key={"restaurants"}
        title="Restaurants"
        imageSrc={Restaurants}
        type={type}
        setType={setType}
        />
        </View>
        <View>
          <View className="flex-row justify-between px-4 mt-8">
            <Text className="text-[#2C7379] text-[28px] font-bold"
            >Top Tips</Text>
            <TouchableOpacity className="flex-row justify-center space-x-2">
            <Text className="text-[#A0C4C7] text-[20px] font-bold"
            >Explore France</Text>
            <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View >
          <View className="px-1 mt-8 flex-row items-center flex-wrap justify-evenly ">
            {mainData?.length > 0 ?(
              <>
              {mainData?.map((data,i)=>(
                <ItemCarDontainer key={i} 
                imageSrc={data?.photo?.images?.medium?.url ?
                  data?.photo?.images?.medium?.url :
                  "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623_1280.jpg"
                } 
                title = {data?.name}
                location = {data?.location_string}
                data = {data}/>
              )) }

          </>):(<>
          <View className="w-full h-[600px]">
          <Text className="text-[40px] text-[#2C7379] w-200 font-bold item-center px-20 mt-0">Oops...!!</Text>
          <Text className="text-[30px] text-[#2C7379] w-200 font-bold px-8 mt-0">Not Found Any Place..</Text>
          <Image className="h-[400px] w-full"
           source={{uri:"https://gifdb.com/images/high/naruto-funny-crying-xcgzlj0eao9ihxnt.gif"}}></Image>
          </View>
          </>)}
          </View>
        </View>
      </ScrollView>
      }
      
    </SafeAreaView>
   

  )
}

export default Discover