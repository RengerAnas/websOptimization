import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  RootStackParamsList,
  ScreenTypes,
} from '../Models/Navigation/Navigation.models';
import Home from '../Screens/Home/Home';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Detail from '../Screens/Detail/Detail';
import {NavigationContainer} from '@react-navigation/native';

type Props = {};

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator = (props: Props) => {
  // Stack Screens
  const Screens: ScreenTypes = [
    {
      name: 'Home',
      title: 'Home',
      Component: Home,
    },
    {
      name: 'Detail',
      title: 'Detail',
      Component: Detail,
    },
  ];

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleAlign: 'center',
        })}>
        {Screens.map(screen => {
          return (
            <Stack.Screen
              key={screen.name}
              name={screen.name}
              component={screen.Component}
              options={({navigation}) => {
                return {
                  ...screen?.options,
                };
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
