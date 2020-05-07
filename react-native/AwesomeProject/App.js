import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

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
        <Text style={[styles.text, { marginBottom: 10 }]}>
          Here are some boxes of different colours
        </Text>
        {boxes.map((box, i) => (
          <View style={[styles.box, { backgroundColor: box.hex }]} key={i}>
            <Text style={styles.boxText}>{`${box.name} ${box.hex}`}</Text>
          </View>
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
  box: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  boxText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
