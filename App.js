import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import InsideBox from './screens/InsideBox';
import WishListScreen from './screens/WishListScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Discover" component={Discover}/>
        <Stack.Screen name="InsideBox" component={InsideBox}/>
        <Stack.Screen name="WishListScreen" component={WishListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}



