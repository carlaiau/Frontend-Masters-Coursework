import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';

const App = () => {
  const boxes = [
    { name: 'Cyan', hex: '#2aa198' },
    { name: 'Blue', hex: '#268bd2' },
    { name: 'Magenta', hex: '#d33682' },
    { name: 'Orange', hex: '#cb4b16' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        {boxes.map((box, i) => (
          <ColorBox name={box.name} hex={box.hex} key={i} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
