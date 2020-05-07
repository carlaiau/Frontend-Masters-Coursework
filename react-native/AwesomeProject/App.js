import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  const listItems = [
    { name: 'Cyan', hex: '#2aa198' },
    { name: 'Blue', hex: '#268bd2' },
    { name: 'Magenta', hex: '#d33682' },
    { name: 'Orange', hex: '#cb4b16' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={[styles.text, { marginBottom: 5 }]}>
          Here are some boxes of different colours
        </Text>
        {listItems.map((li, i) => (
          <View style={[styles.listItem, { backgroundColor: li.hex }]} key={i}>
            <Text style={[styles.text, styles.listItemText]}>
              {li.name} {li.hex}
            </Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 3,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  listItemText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
