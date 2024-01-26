import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo} from 'react';
import {CharacterType} from '../../../Models/Character/Character.model';
import Styles, {height, width} from '../../../Constants/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../../Models/Navigation/Navigation.models';
import {StackNavigationProp} from '@react-navigation/stack';
import Animated, {FadeInDown} from 'react-native-reanimated';

type Props = {
  item: CharacterType;
  index: number;
};

const Card = ({item, index}: Props) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamsList, 'Home'>>();
  const onCardPress = () => {
    navigation.navigate('Detail', {
      data: item,
    });
  };

  return (
    <Animated.View
      style={{flex: 1}}
      entering={FadeInDown.delay(index > 10 ? 0 : index * 80)}>
      <Pressable style={styles.container} onPress={onCardPress}>
        <LinearGradient
          colors={['#ffffff00', '#0000008f']}
          locations={[0.1, 0.9]}
          style={styles.gradientContainer}
        />
        <ImageBackground
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.img}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    ...Styles.center,
    height: height * 0.25,
  },
  gradientContainer: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  img: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },

  innerContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
