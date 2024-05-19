import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import Input from "../components/input"
import { ENV_IP } from '@env';


const dropdowndata = [
  { label: 'Kilograms to Pounds', value: 'KgToPounds' },
  { label: 'Pounds to Kilograms', value: 'PoundsToKg' },
  { label: 'Kilometers to Miles', value: 'KmToMiles' },
  { label: 'Miles to Kilometers', value: 'MilesToKm' },
  { label: 'Centimeters to Feet and Inches', value: 'CmToFeetInches' },
];


const MetricsCalculatorScreen: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [type, setType] = useState<string>("")
  const [value, setValue] = useState<string>("")

  const convert = async () => {
    // TODO This alert does not work
    if (input == "") {
      Alert.alert("Error", "Please enter a value");
      return;
    }

    try {
      const response = await fetch(`${ENV_IP}/convert`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: type, value: parseFloat(input) }),
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
      <Text style={styles.label}>Unit Converter</Text>
      <Input 
        title={""}
        placeholder={"Enter value"}
        onChangeText={(text) => setInput(text)}
        secureTextEntry = {false}
        style={{width:250}}
      />
        <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dropdowndata}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setType(item.value);
        }}
      />
      <Button title="Convert" onPress={() => convert()} />
      <Text style={styles.label}>Result:</Text>
      <Text>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    padding: 100,
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
  dropdown: {
    width:200,
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default MetricsCalculatorScreen;