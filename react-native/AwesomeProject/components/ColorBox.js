import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ name = 'Cyan', hex = '#2aa198' } = {}) => {
  const textColor = {
    color:
      parseInt(hex.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
  };
  return (
    <View style={[styles.box, { backgroundColor: hex }]}>
      <Text style={[styles.text, textColor]}>
        {name} {hex}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ColorBox;
