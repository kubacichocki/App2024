import React, { useEffect, useRef } from "react";
import { SafeAreaView, StyleSheet, View, Text, Animated } from 'react-native';
import Icon from '../components/icon';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../App'; // Import the RootStackParamList type


type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash: React.FC<Props> = ({ navigation }) => {
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            // Start the fade out animation
            Animated.timing(opacity, {
                toValue: 0,
                duration: 600, // Duration of the animation in milliseconds
                useNativeDriver: true,
            }).start(() => {
                // Navigate to the Home screen after the animation completes
                navigation.replace("Home");
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigation, opacity]);

    return (
        <View style={styles.center}>
            <Animated.Image
                source={require('../assets/logo.png')}
                style={[styles.img, { opacity }]} // Apply the animated opacity style
            />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
    },
    img: {
        width: 500,
        height: 500,
        marginBottom: 20,
    },
});

export default Splash;