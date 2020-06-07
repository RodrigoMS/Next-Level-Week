import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// createStackNavegation - Navegacao em pilha
import { createStackNavigator } from "@react-navigation/stack";

/* Quem realizara a nevagacao daaplicacao */
const Stack = createStackNavigator();

import Home from './pages/Home'
import Points from './pages/Points'
import Detail from './pages/Detail'

const Routes = () => {
  return (
    /* Como a rota deve se comportar. */
    <NavigationContainer>

      <Stack.Navigator 
        headerMode="none" 
        screenOptions={{
          cardStyle: {
            /* Troca a cor de fundo de todas as telas. */
            backgroundColor: '#f0f0f5'
          }}}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Points" component={Points}/>
        <Stack.Screen name="Detail" component={Detail}/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Routes;
