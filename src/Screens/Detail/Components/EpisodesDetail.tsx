import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import episodesController from '../../../Controllers/episodes.controller';
import {EpisodeType} from '../../../Models/Episode/Episode.modal';

type Props = {
  url: string;
};

const EpisodesDetail = ({url}: Props) => {
  const [details, setDetails] = useState<EpisodeType>();

  const fetchEpisode = async () => {
    const response = await episodesController.fetchEpisode(url);
    setDetails(response);
  };

  useEffect(() => {
    fetchEpisode();
  }, []);

  return (
    <View>
      <Text style={styles.nameTxt}>{details?.name}</Text>
    </View>
  );
};

export default EpisodesDetail;

const styles = StyleSheet.create({
  nameTxt: {
    fontSize: 15,
    marginVertical: 5,
    color: '#1e247a',
  },
});
