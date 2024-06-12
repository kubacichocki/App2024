import React from 'react';
import { Text, Image, View, StyleSheet, ImageStyle, ViewStyle, TextStyle } from 'react-native';

// Define styles type
type Styles = {
    container: ViewStyle;
    img: ImageStyle;
    txt: TextStyle;
};

//Icon component
const Icon: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.img}
            />
        </View>
    );
};

//Styling
const styles = StyleSheet.create<Styles>({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 290,
        height: 80,
        marginBottom: 20,
    },
    txt: {
        fontSize: 32,
        fontWeight: '600',
        marginTop: 0,
    }
});

export default Icon;