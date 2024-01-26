import {RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {CharacterType} from '../Character/Character.model';

export type MainStackParamsList = {
  Home: undefined;
  Detail: {
    data: CharacterType;
  };
};

export type RootStackParamsList = MainStackParamsList;

export type ScreenTypes = {
  name: keyof RootStackParamsList;
  title: keyof RootStackParamsList;
  Component: React.FC<any>;
  options?: StackNavigationOptions;
}[];

export interface NavigationProps<T extends keyof RootStackParamsList> {
  navigation: StackNavigationProp<RootStackParamsList, T>;
  route: RouteProp<RootStackParamsList, T>;
}
