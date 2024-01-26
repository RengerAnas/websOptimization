import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import characterController from '../../Controllers/character.controller';
import {CharacterType} from '../../Models/Character/Character.model';
import Card from './Components/Card';
import {FlashList} from '@shopify/flash-list';
import {END_POINTS} from '../../Constants/API.Constants';
import {BASE_URL} from '../../Service/ApiService';

type Props = {};

const Home = (props: Props) => {
  const [data, setData] = useState<CharacterType[]>([]);
  const [nextPage, setNextPage] = useState('');
  const [page, setPage] = useState(1);

  // Fetching initial Data
  const fetchData = async () => {
    try {
      const res = await characterController.fetchCharacter();
      setData(res.results);
      setNextPage(res.info.next);
    } catch (error) {}
  };

  // Fetching next page data
  const fetchNextPage = async () => {
    try {
      if (!nextPage) return;
      const res = await characterController.fetchNextCharacters(page);
      setData(pre => [...new Set([...pre, ...res.results])]);
      setNextPage(res.info.next);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (page > 1) fetchNextPage();
  }, [page]);

  const onEndReached = async () => {
    setPage(pre => pre + 1);
  };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        {...{data, onEndReached}}
        ListFooterComponent={
          <ActivityIndicator size={'small'} color={'black'} />
        }
        numColumns={2}
        renderItem={({item, index}) => {
          return <Card {...{item, index}} />;
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
