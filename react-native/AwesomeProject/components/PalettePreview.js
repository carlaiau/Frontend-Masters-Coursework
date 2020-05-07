import React from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PalettePreview = ({ handlePress, palette }) => (
  <TouchableOpacity onPress={handlePress}>
    <Text style={styles.heading}>{palette.paletteName}</Text>
    <FlatList
      style={styles.row}
      data={palette.colors.slice(0, 5)}
      renderItem={({ item }) => (
        <View style={[styles.square, { backgroundColor: item.hexCode }]} />
      )}
      keyExtractor={(item) => item.colorName}
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
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 3,
  },
});
export default PalettePreview;
