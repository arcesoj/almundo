import { StackNavigator } from 'react-navigation';

import HotelDetailScreen from 'almundo/src/screens/Hotel/HotelDetailScreen';
import HotelListScreen from 'almundo/src/screens/Hotel/HotelListScreen';

export const AppNavigator = StackNavigator({
    HotelListScreen: {
      screen: HotelListScreen,
    },
    HotelDetailScreen: {
      screen: HotelDetailScreen,
    },  
},{ });