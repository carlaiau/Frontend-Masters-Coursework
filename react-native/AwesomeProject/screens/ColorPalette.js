import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

import ColorBox from '../components/ColorBox';

const ColorPalette = () => {
  const COLORS = [
    { name: 'Base03', hex: '#002b36' },
    { name: 'Base02', hex: '#073642' },
    { name: 'Base01', hex: '#586e75' },
    { name: 'Base00', hex: '#657b83' },
    { name: 'Base0', hex: '#839496' },
    { name: 'Base1', hex: '#93a1a1' },
    { name: 'Base2', hex: '#eee8d5' },
    { name: 'Base3', hex: '#fdf6e3' },
    { name: 'Yellow', hex: '#b58900' },
    { name: 'Orange', hex: '#cb4b16' },
    { name: 'Red', hex: '#dc322f' },
    { name: 'Magenta', hex: '#d33682' },
    { name: 'Violet', hex: '#6c71c4' },
    { name: 'Blue', hex: '#268bd2' },
    { name: 'Cyan', hex: '#2aa198' },
    { name: 'Green', hex: '#859900' },
  ];

  return (
    <SafeAreaView style={styles.everything}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={
          <Text style={styles.heading}>Solarized Color Palette</Text>
        }
        data={COLORS}
        renderItem={({ item }) => <ColorBox name={item.name} hex={item.hex} />}
        keyExtractor={(color, i) => i}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  everything: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ColorPalette;
