import { Text, View, Image, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { useRouter } from 'expo-router';
import { GameContext } from "../components/gameContext.jsx"

import Game from "../components/Game.jsx";
import gameData from "../assets/games.json";

const ds2 = require("../assets/images/dark-souls-II.png");
const ds2_2nd = require("../assets/images/dark-souls-II-2nd.png")
const smw = require("../assets/images/super-mario-world.png");
const mgrr = require("../assets/images/mgr-revengeance.png");

const images = { ds2, ds2_2nd, smw, mgrr };

export default function Index() {
    const router = useRouter();
    const { gameData } = useContext(GameContext);
    const [index, setIndex] = useState(0);

    return (
    <View style={styles.container}>
        <Game
            gameData={gameData[index]}
            image={images[gameData[index].image]}
            setGame={setIndex}
            currentIndex={index}
        />
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
});
