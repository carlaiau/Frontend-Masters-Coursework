import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  // State Hook obviously
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // UseCallback
  const getPalletes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const data = await result.json();
      setPalettes(data);
    }
  }, []);

  // call the callback on mount
  useEffect(() => {
    getPalletes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await getPalletes();
    // Emulate
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000)

  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={palettes}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              const { paletteName, colors } = item;
              navigation.push('ColorPalette', { name: paletteName, colors });
            }}
            palette={item}
          />
        )}
        keyExtractor={(item) => item.paletteName}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ColorPaletteModal')
            }}
          >
            <Text>Launch Modal</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
});

export default Home;
