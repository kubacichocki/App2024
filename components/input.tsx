import React from 'react';
import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface InputProps {
    title?: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    style?: ViewStyle;
    secureTextEntry: boolean;
    error?: string;
}

const Input: React.FC<InputProps> = (props) => {
    const {title, onChangeText, placeholder, style, secureTextEntry, error} = props;

    return (
        <View style={style}>
            {title ? <Text style={styles.title}>{title}</Text> : null}
            <TextInput
                style = {styles.input}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        margin: 10,
        height: 50,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: '#333333',
        shadowColor: '#000000', 
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 14,
    },
    error: {

        color: '#ac0003',
    },

});

//Input default properties
Input.defaultProps = {
    title: 'Title',
    placeholder: 'Placeholder...',
    secureTextEntry: false,
    style: {width: 200},
};

export default Input;