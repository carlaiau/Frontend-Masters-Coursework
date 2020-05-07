import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push('ColorPalette')}>
                <Text style={styles.heading}>Solarized</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    heading: {
        fontSize: 18,
        fontWeight: '700'
    }
})

export default Home;
