import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, styles.pink]}>
        <Text style={{ color: '#fff' }}>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
  },
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
