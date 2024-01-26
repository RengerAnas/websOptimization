import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import LabeledDetail from './LabeledDetail';
import locationController from '../../../Controllers/location.controller';
import {LocationType} from '../../../Models/Location/Location.model';

type Props = {
  label: string;
  name: string;
  url: string;
};

const LocationDetail = ({name, url, label}: Props) => {
  const [detail, setDetail] = useState<LocationType>();

  const fetchDetails = async () => {
    try {
      const result = await locationController.fetchLocation(url);
      setDetail(result);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <LabeledDetail label="Name" value={name} paddingVertical={5} />

          {/* ONLY SHOWING WHEN URL IS AVAILABLE */}
          {url && (
            <>
              <LabeledDetail label="Dimension" value={detail?.dimension} />
              <LabeledDetail
                label="Amount of Residents"
                value={detail?.residents.length.toString()}
              />
              <LabeledDetail label="Type" value={detail?.type} />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default LocationDetail;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
  },
  labelText: {
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    padding: 10,
  },
});
