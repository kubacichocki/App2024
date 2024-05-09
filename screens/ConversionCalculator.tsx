import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const MetricsCalculatorScreen: React.FC = () => {
    const [pounds, setPounds] = useState<string>("");
    const [kilograms, setKilograms] = useState<string>("");
  
    const convertToKilograms = () => {
      if (pounds === "") {
        Alert.alert("Error", "Please enter a value in pounds");
        return;
      }
      const poundsValue = parseFloat(pounds);
      if (isNaN(poundsValue)) {
        Alert.alert("Error", "Please enter a valid number");
        return;
      }
      const kilogramsValue = poundsValue / 2.20462;
      setKilograms(kilogramsValue.toFixed(2).toString());
    };
  
    const convertToPounds = () => {
      if (kilograms === "") {
        Alert.alert("Error", "Please enter a value in kilograms");
        return;
      }
      const kilogramsValue = parseFloat(kilograms);
      if (isNaN(kilogramsValue)) {
        Alert.alert("Error", "Please enter a valid number");
        return;
      }
      const poundsValue = kilogramsValue * 2.20462;
      setPounds(poundsValue.toFixed(2).toString());
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Pounds:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setPounds(text)}
          value={pounds}
        />
        <Button title="Convert to Kilograms" onPress={convertToKilograms} />
        <Text style={styles.label}>Kilograms:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setKilograms(text)}
          value={kilograms}
        />
        <Button title="Convert to Pounds" onPress={convertToPounds} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    label: {
      fontSize: 18,
      marginBottom: 5,
    },
    input: {
      width: "100%",
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
  });
  
  export default MetricsCalculatorScreen;