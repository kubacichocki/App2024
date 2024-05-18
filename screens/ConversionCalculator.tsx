import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import Input from "../components/input"

const MetricsCalculatorScreen: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const convert = async (conversionType: string) => {
    // TODO This alert does not work
    if (value == "") {
      Alert.alert("Error", "Please enter a value");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: conversionType, value: parseFloat(value) }),
      });

      if (!response.ok) {
        throw new Error('Conversion failed');
      }

      const data = await response.json();
      setResult(data.value.toString());
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Conversion failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Value:</Text>
      <Input 
        title={""}
        placeholder={"Enter value"}
        onChangeText={(text) => setValue(text)}
        secureTextEntry = {false}
        // style={{width:300}}
      />
      <Button title="Convert to Pounds" onPress={() => convert('kgToPounds')} />
      <Button title="Convert to Kilograms" onPress={() => convert('poundsToKg')} />
      <Text style={styles.label}>Result:</Text>
      <Text>{result}</Text>
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