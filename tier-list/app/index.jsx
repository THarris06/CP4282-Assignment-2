import { Text, View, Image } from "react-native";
import { useState } from "react";

import Game from "../components/Game.jsx";
import gameData from "../assets/games.json";

import Button from "../components/Button.jsx";

const ds2 = require("../assets/images/dark-souls-II.png");
const smw = require("../assets/images/super-mario-world.png");
const mgrr = require("../assets/images/mgr-revengeance.png");

const images = { "ds2": ds2, "smw": smw, "mgrr": mgrr };

export default function Index() {

    const [index, setIndex] = useState(0);

    return (

        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
        }}
        >
        <Game gameData={gameData[index]} image={images[gameData[index].image]} />
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Button label="#1" setGame={setIndex} index={0} currentIndex={index} />
            <Button label="#2" setGame={setIndex} index={1} currentIndex={index} />
            <Button label="#3" setGame={setIndex} index={2} currentIndex={index} />
        </View>
    </View>
    );
}
