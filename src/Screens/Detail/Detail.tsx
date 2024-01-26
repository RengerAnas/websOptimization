import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationProps} from '../../Models/Navigation/Navigation.models';
import characterController from '../../Controllers/character.controller';
import {height} from '../../Constants/Styles';
import LabeledDetail from './Components/LabeledDetail';
import LocationDetail from './Components/LocationDetail';
import EpisodesDetail from './Components/EpisodesDetail';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

type Props = {};

const Detail = ({
  route: {
    params: {data},
  },
}: NavigationProps<'Detail'>) => {
  return (
    <Animated.ScrollView entering={FadeInDown.delay(200)}>
      <Image source={{uri: data.image}} resizeMode="cover" style={styles.img} />
      <View style={styles.container}>
        <Text style={styles.nameText}>{data.name}</Text>

        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <LabeledDetail label="Gender" value={data.gender} />
          <LabeledDetail label="Species" value={data.species} />
        </View>
        {/* Location Details */}
        <LocationDetail {...data.origin} label="Origin" />
        <LocationDetail {...data.location} label="Location" />

        {/* Episodes Details */}
        <Text style={styles.nameText}>Episodes Character Featured In</Text>
        {data.episode.map((item, index) => {
          return (
            <View key={index}>
              <EpisodesDetail url={item} />
            </View>
          );
        })}
      </View>
    </Animated.ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: height * 0.35,
  },
  container: {
    padding: 15,
  },
  nameText: {
    fontSize: 30,
    fontWeight: '700',
    paddingBottom: 10,
    color: 'black',
  },
});
