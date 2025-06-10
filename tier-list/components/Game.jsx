import { StyleSheet, Text, View, Image } from "react-native";

export default function Game({ gameData, image }) {

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Title: {gameData.title}</Text>
            <Text style={styles.year}>Year: {gameData.year}</Text>
            <Image source={image} style={styles.image} resizeMode="contain" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    year: {
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 200,
    },
});