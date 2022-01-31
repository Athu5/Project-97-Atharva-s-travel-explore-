import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import PlacesScreen from './screens/PlacesScreen';
import Favorite from './screens/Favorite';
import {useState} from "react"

const Stack = createStackNavigator();

export default function App (){

const [favItems, setfavItems] = useState([]);

const onAdd = (place) => {
  const exist = favItems.find((x) => x.id === place.id);
  if (exist) {
    setfavItems(
      favItems.map((x) =>
        x.id === place.id ? { ...exist, qty: exist.qty = 1 } : x
      )
    );
  } else {
    setfavItems([...favItems, { ...place, qty: 1 }]);
  }
};

const onRemove = (place) => {
  const exist = favItems.find((x) => x.id === place.id);
  if (exist.qty === 1) {
    setfavItems(favItems.filter((x) => x.id !== place.id));
  } else {
    setfavItems(
      favItems.map((x) =>
        x.id === place.id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
};
return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home"> 
      {(props) => <HomeScreen {...props}  onAdd={onAdd} favItems ={favItems } noOffavItems={favItems.length}/>}  
      </Stack.Screen>
      <Stack.Screen name = "Place" component = {PlacesScreen}/>
      <Stack.Screen name="Favorite"  >
        {(props) => <Favorite {...props} favItems ={favItems} onAdd={onAdd} onRemove={onRemove}/>}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
)
}
