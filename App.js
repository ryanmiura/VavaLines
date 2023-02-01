import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AgentScreen from './AgentScreen';
import HomeScreenn from './HomeScreenn';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="Teste" component={HomeScreenn}  options={{ headerShown: false }}/>
        <Stack.Screen name="Agents" component={AgentScreen} options={{headerStyle:{backgroundColor: 'red',}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



