import React from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const PalettePreview = ({ handlePress, palette }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.heading}>{palette.name}</Text>
    <FlatList
      style={styles.row}
      data={palette.colors.slice(0, 5)}
      renderItem={({ item }) => (
        <View style={[styles.square, { backgroundColor: item.hex }]} />
      )}
      keyExtractor={item => item.name}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 5,
    marginBottom: 10,
  },
  square: {
    width: 50,
    height: 50,
    marginRight: 5,
    borderRadius: 3,
  },
});
export default PalettePreview;
