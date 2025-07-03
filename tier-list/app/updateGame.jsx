import { useState, useContext } from "react";
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import { Picker } from "@react-native-picker/picker";

import { GameContext } from "../components/gameContext.jsx";

export default function updateGame() {
    const [currentGame, setCurrentGame] = useState(0);

    const { gameData, setGameData } = useContext(GameContext);

    const [title, setTitle] = useState(gameData[currentGame].title)
    const [year, setYear] = useState(gameData[currentGame].year)
    const [developer, setDev] = useState(gameData[currentGame].developer);
    const [image, setImage] = useState(gameData[currentGame].image)

    const changeYear = (value) => {
        const updatedYear = parseInt(value);
        setYear(updatedYear);
    }

    const updateGameData = () => {
        const updatedData = {
            title: title,
            year: year,
            developer: developer,
            image: image
        };

        gameData[currentGame] = updatedData;
        setGameData(gameData);
    };

    const changeGameIndex = (value) => {
        const index = parseInt(value);
        setTitle(gameData[index].title);
        setYear(gameData[index].year);
        setDev(gameData[index].developer);
        setImage(gameData[index].image);
    }

    return (
        <View style={styles.container}>
            <Text>Game Index</Text>
            <Picker
                style={styles.picker}
                selectedValue={currentGame}
                onValueChange={(itemValue, itemIndex) =>
                changeGameIndex(itemIndex)
            }>
                <Picker.Item label="Dark Souls 2" value="g1" />
                <Picker.Item label="Super Mario World" value="g2" />
                <Picker.Item label="Metal Gear Rising Revengance" value="g3" />
            </Picker>

            <Text>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>

            <Text>Year</Text>
            <TextInput style={styles.input} value={year.toString()} onChangeText={changeYear}/>

            <Text>Developer</Text>
            <TextInput style={styles.input} value={developer} onChangeText={setDev} />

            <Text>Image</Text>
            <Picker
                style={styles.picker}
                selectedValue={image}
                onValueChange={(itemValue, itemIndex) =>
                setImage(itemValue)
            }>
                <Picker.Item label="Dark Souls 2 #1" value="ds2" />
                <Picker.Item label="Dark Souls 2 #2" value="ds2_2nd" />
                <Picker.Item label="Super Mario World" value="smw" />
                <Picker.Item label="Metal Gear Rising R" value="mgrr" />
            </Picker>
            <View style={styles.buttonContainer}>
                <Button title="Update" onPress={updateGameData} />
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
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    buttonContainer: {
        marginTop: 16,
        width: "50%",
    },
});