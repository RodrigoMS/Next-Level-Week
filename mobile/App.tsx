import React from 'react';

// Sinal de carregamento da aplicacao
import { AppLoading } from "expo";

// impotacao dos forntes
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

import { StatusBar } from 'react-native';

import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  // Enquanto as fontes nao forem carredas exiba tela inicial ou loader. 
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar 
        translucent
        barStyle="dark-content" 
        backgroundColor="transparent" />
      <Routes />
    </>
  );
}