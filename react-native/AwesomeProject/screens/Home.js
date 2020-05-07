import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const colors = [
    {
      name: 'Solarized',
      colors: [
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
      ]
    },
    {
      name: 'Rainbow',
      colors: [
        { name: 'Red', hex: '#FF0000' },
        { name: 'Orange', hex: '#FF7F00' },
        { name: 'Yellow', hex: '#FFFF00' },
        { name: 'Green', hex: '#00FF00' },
        { name: 'Violet', hex: '#8B00FF' },
      ]
    },
    {
      name: 'Frontend Masters',
      colors: [
        { name: 'Red', hex: '#c02d28' },
        { name: 'Black', hex: '#3e3e3e' },
        { name: 'Grey', hex: '#8a8a8a' },
        { name: 'White', hex: '#ffffff' },
        { name: 'Orange', hex: '#e66225' },
      ]
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={colors}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const { name, colors } = item
              navigation.push('ColorPalette', { name, colors })
            }}
          >
            <Text style={styles.heading}>{item.name}</Text>
          </TouchableOpacity>)}
        keyExtractor={(_, i) => i}
      />


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },
});

export default Home;
