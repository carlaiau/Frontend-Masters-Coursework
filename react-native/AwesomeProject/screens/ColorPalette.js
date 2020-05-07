import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  return (
    <SafeAreaView style={styles.everything}>
      <FlatList
        style={styles.container}
        data={colors}
        renderItem={({ item }) => <ColorBox name={item.colorName} hex={item.hexCode} />}
        keyExtractor={item => item.colorName}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  everything: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

export default ColorPalette;
