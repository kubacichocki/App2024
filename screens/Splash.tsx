import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Icon from '../components/icon';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../App'; // Import the RootStackParamList type


type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

//Splash screen
const Splash: React.FC<Props> = ({ navigation }) => {
    //navigate to login
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 1000);
    }, []);
    return (
        <View style={styles.center}>
           <Icon></Icon>
        </View>
    );
};

//styling
const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: '#ffffff',
    },
});

export default Splash;