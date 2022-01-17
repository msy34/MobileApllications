import React from "react"
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from "./pages/Products";
import Detail from "./pages/Detail";


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;