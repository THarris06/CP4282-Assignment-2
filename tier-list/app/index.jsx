import { Text, View, Image, Button } from "react-native";
import { useState } from "react";

import Game from "../components/Game.jsx";
import gameData from "../assets/games.json"

const ds2 = require("../assets/images/dark-souls-II.png");
const smw = require("../assets/images/super-mario-world.png");
const mgrr = require("../assets/images/mgr-revengeance.png");

const images = { "ds2": ds2, "smw": smw, "mgrr": mgrr };

export default function Index() {

  const [index, setIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Game gameData={gameData[index]} image={images[gameData[index].image]}/>
        <Button title="#1" onPress={ () => setIndex( (0) )}/>
        <Button title="#2" onPress={ () => setIndex( (1) )}/>
        <Button title="#3" onPress={ () => setIndex( (2) )}/>
    </View>
  );
}
