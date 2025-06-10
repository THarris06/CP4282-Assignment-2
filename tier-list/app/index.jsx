import { Text, View, Image, Button } from "react-native";
import { useState } from "react";

import Game from "../components/Game.jsx";
import gameData from "../assets/games.json"

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
        <Game gameData={gameData[index]}/>
        <Button title="Switch game" onPress={ () => setIndex( (index + 1) % gameData.length)}/>
    </View>
  );
}
