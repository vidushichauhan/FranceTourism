import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image,Button } from 'react-native';
import { ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { dataForLikes } from '../api/callingExposedApis';
import ItemCarDontainer from '../components/ItemCarDontainer';


const WishListScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [showElement, setShowElement] = useState(true);

  const toggleElement = () => {
    setShowElement(!showElement);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dataForLikes();
        setMainData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text className="text-[40px] text-[#0B646B] text-center">ITINERARY</Text>
      </View>
      <ScrollView>
        <View>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : mainData.length > 0 ? (
            mainData.map((item, i) => {
              const restaurantData = JSON.parse(item.data[0]).param;
              return (
                <React.Fragment key={i}>
              <View className="px-10 mt-8 flex-coloumn items-center flex-wrap justify-evenly">
                <ItemCarDontainer
                  key={i}
                  imageSrc={restaurantData?.photo?.images?.medium?.url || "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623_1280.jpg"}
                  title={restaurantData?.name}
                  location={restaurantData?.location_string}
                  data={restaurantData}
                />
              <Text style={{  marginVertical: 10, color: '#2C7379', fontSize: 16 }}>You Can Go To {restaurantData?.name}
              </Text>
              <Text style={{  marginVertical: 10, color: '#2C7379', fontSize: 16 }}>It is in {restaurantData?.location_string}
              </Text>
              </View>
              
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showElement && <View style={{ backgroundColor: 'red' }} 
      >
        <Text style={{ color: '#2C7379', fontSize: 30 }}>Recommended Place:</Text>
              <Text style={{ color: '#2C7379', fontSize: 16 }}>As per the reviews and the to your nearest location you can checkout this place    </Text>
              <ItemCarDontainer
                  key={i}
                  imageSrc={restaurantData?.photo?.images?.medium?.url || "https://cdn.pixabay.com/photo/2017/06/21/09/19/spoon-2426623_1280.jpg"}
                  title={restaurantData?.name}
                  location={restaurantData?.location_string}
                  data={restaurantData}
                />
      </View>}
      <Button title={showElement ? 'Hide Element' : 'Show Element'} onPress={toggleElement} />
      
    </View>
             
              </React.Fragment>
              );
            })
          ) : (
            <View className="w-full h-[600px]">
              <Text className="text-[40px] text-[#2C7379] w-200 font-bold item-center px-20 mt-0">Oops...!!</Text>
              <Text className="text-[30px] text-[#2C7379] w-200 font-bold px-8 mt-0">Not Found Any Place..</Text>
              <Image className="h-[400px] w-full" source={{ uri: "https://gifdb.com/images/high/naruto-funny-crying-xcgzlj0eao9ihxnt.gif" }} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WishListScreen;
