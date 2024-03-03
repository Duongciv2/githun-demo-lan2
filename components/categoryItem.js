import React from 'react';
import { Image, View , Text, StyleSheet } from 'react-native'
import SantaImage from '../anh/santa.png'

export default function CategoryItem(props) {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>santa</Text>
        <Image style={styles.categoryImage} source={SantaImage} />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0},
        marginBottom: 16,
    },

    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    }
});