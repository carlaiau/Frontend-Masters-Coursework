import React from 'react';

import { View, FlatList, StyleSheet } from 'react-native';

const PalettePreview = ({ squares }) => (
  <FlatList
    style={styles.row}
    data={squares}
    renderItem={({ item }) => (
      <View style={[styles.square, { backgroundColor: item.hex }]} />
    )}
    keyExtractor={(_, i) => i}
  />
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
