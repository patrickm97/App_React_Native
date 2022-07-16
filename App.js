import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import JanelaCadastro from './components/JanelaCadastro';
import JanelaLogin from './components/JanelaLogin';
import JanelaHome from './components/JanelaHome';
import JanelaDetalhes from './components/JanelaDetalhes';
import JanelaRegistro from './components/JanelaRegistro';

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

class Root extends React.Component {
  render() {
    return(
        <Bottom.Navigator>
          <Bottom.Screen name="Login" component={JanelaLogin} 
            options={{
              tabBarLabel: "Login",
              tabBarIcon: ({color,size}) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />)
            }} />
          <Bottom.Screen name="Cadastro" component={JanelaCadastro}
            options={{
              tabBarLabel: "Cadastro",
              tabBarIcon: ({color,size}) => (
              <MaterialCommunityIcons name="clipboard-account" color={color} size={30} />)
            }} />
        </Bottom.Navigator>
    );
  }
}

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={JanelaHome}
          options={{title: "Lista de produtos"}} />
          <Stack.Screen name="Detalhes" component={JanelaDetalhes} 
          options={{title: "Detalhes do produto"}} />
          <Stack.Screen name="Registro" component={JanelaRegistro} 
          options={{title: "Registrar novo produto"}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}