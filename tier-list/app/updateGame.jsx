import React, { useState } from "react";
import {View, StyleSheet, TextInput, Button} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function updateGame() {
    const [selectedOption, setSelectedOption] = useState("option1");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Game Title"
                placeholderTextColor="#666"
            />
            <TextInput
                style={styles.input}
                placeholder="Release Year"
                placeholderTextColor="#666"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Developer"
                placeholderTextColor="#666"
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue) => setSelectedOption(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                </Picker>
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={() => { /* Add submit logic here */ }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d9dce1",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    picker: {
        width: "100%",
        height: 50,
    },
    buttonContainer: {
        marginTop: 16,
        width: "50%",
    },
});