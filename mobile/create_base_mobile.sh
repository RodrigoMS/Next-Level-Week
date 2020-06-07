## Instalar o Expo de forma clobal na maquina.
## npm install -g expo-cli

## Iniciar o projeto expo. 
# expo init mobile

## entrar na pasta do projeto
#cd mobile

## Inciar o expo
#npm start

## Instalacao doas fontes "ubuntu" e "roboto" no expo
## https://github.com/expo/google-fonts
expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

## Instalacao do react navegation
## https://reactnavigation.org/docs/getting-started
npm install @react-navigation/native

## Animacoes, botoes, navegacao, marcara de vews entre outras.
## https://reactnavigation.org/docs/getting-started
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

## Tipos de navegacao na rota.
npm install @react-navigation/stack

## Integracao de mapas no expo
expo install react-native-maps 

## 
expo install expo-constants

## Por padrao o expo nao interpleta iganes SVG
## Sendo necessario instalar react-native-svg
expo install react-native-svg

## Localizacao no mapa - oferecendo tora a parte
#3 de Geolocalizacao.
expo install expo-location

## Instalacao do axios
npm install axios

## Email do expo
expo install expo-mail-composer